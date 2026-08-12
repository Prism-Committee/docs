import {readdir, readFile, unlink, writeFile} from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const outputDirectory = path.resolve(process.argv[2] ?? 'build');
const excludedLocaleDirectories = new Set(['en']);

async function findMarkdownFiles(directory) {
  const entries = await readdir(directory, {withFileTypes: true});
  const files = await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);
      return entry.isDirectory() ? findMarkdownFiles(entryPath) : [entryPath];
    }),
  );

  return files.flat().filter((file) => file.endsWith('.md'));
}

function getTitle(markdown, relativePath) {
  const heading = markdown.match(/^#\s+(.+)$/m)?.[1]?.trim();
  if (heading) {
    return heading;
  }

  return path.basename(relativePath, '.md').replaceAll('-', ' ');
}

function isExcludedLocale(relativePath) {
  const [topLevelDirectory] = relativePath.split(path.sep);
  return excludedLocaleDirectories.has(topLevelDirectory);
}

function getHtmlPath(markdownFile) {
  const relativePath = path.relative(outputDirectory, markdownFile);
  if (relativePath === 'index.md') {
    return path.join(outputDirectory, 'index.html');
  }

  const routePath = relativePath.slice(0, -path.extname(relativePath).length);
  return path.join(outputDirectory, routePath, 'index.html');
}

async function isDocumentationPage(markdownFile) {
  try {
    const html = await readFile(getHtmlPath(markdownFile), 'utf8');
    return html.includes('docs-doc-page');
  } catch (error) {
    if (error?.code === 'ENOENT') {
      return false;
    }
    throw error;
  }
}

function getSiteOrigin(sitemap) {
  const firstLocation = sitemap.match(/<loc>(https?:\/\/[^<]+)<\/loc>/)?.[1];
  if (!firstLocation) {
    throw new Error('Unable to determine the site URL from build/sitemap.xml');
  }

  return new URL(firstLocation).origin;
}

const allMarkdownFiles = await findMarkdownFiles(outputDirectory);
const documentationChecks = await Promise.all(
  allMarkdownFiles.map((file) => isDocumentationPage(file)),
);
const documentationFiles = allMarkdownFiles.filter(
  (_file, index) => documentationChecks[index],
);
const defaultLocaleFiles = allMarkdownFiles.filter(
  (file, index) =>
    !isExcludedLocale(path.relative(outputDirectory, file)) &&
    documentationChecks[index],
);
const excludedMarkdownFiles = allMarkdownFiles.filter(
  (file) => !documentationFiles.includes(file),
);

await Promise.all(excludedMarkdownFiles.map((file) => unlink(file)));

if (defaultLocaleFiles.length === 0) {
  throw new Error('No default-locale Markdown pages were generated');
}

const sitemap = await readFile(path.join(outputDirectory, 'sitemap.xml'), 'utf8');
const siteOrigin = getSiteOrigin(sitemap);
const documents = await Promise.all(
  defaultLocaleFiles.map(async (file) => {
    const relativePath = path.relative(outputDirectory, file);
    const publicPath = relativePath.split(path.sep).join('/');
    const markdown = await readFile(file, 'utf8');

    return {
      title: getTitle(markdown, relativePath),
      url: new URL(`/${publicPath}`, siteOrigin).toString(),
    };
  }),
);

documents.sort((left, right) =>
  left.title.localeCompare(right.title, 'zh-CN'),
);

const llmsIndex = [
  "# Prism's Docs",
  '',
  '> Prism-Committee 中文文档索引，为 AI 工具提供可直接读取的 Markdown 内容。',
  '',
  '## 中文文档',
  '',
  ...documents.map(({title, url}) => `- [${title}](${url})`),
  '',
].join('\n');

await writeFile(path.join(outputDirectory, 'llms.txt'), llmsIndex, 'utf8');

console.log(
  `Generated llms.txt with ${documents.length} Chinese documents; preserved ${documentationFiles.length} localized Markdown routes and removed ${excludedMarkdownFiles.length} non-document routes.`,
);
