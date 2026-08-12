import {translate} from '@docusaurus/Translate';
import {useEffect, useRef, useState} from 'react';
import type {ReactNode} from 'react';

import styles from './styles.module.css';

type CopyStatus = 'idle' | 'copying' | 'success' | 'error';

const labels: Record<CopyStatus, () => string> = {
  idle: () =>
    translate({
      id: 'copyPageButton.idle',
      message: '复制整篇 Markdown',
    }),
  copying: () =>
    translate({
      id: 'copyPageButton.copying',
      message: '正在复制…',
    }),
  success: () =>
    translate({
      id: 'copyPageButton.success',
      message: '已复制',
    }),
  error: () =>
    translate({
      id: 'copyPageButton.error',
      message: '复制失败',
    }),
};

function getMarkdownUrl(): string {
  const url = new URL(window.location.href);
  url.hash = '';
  url.search = '';
  url.pathname =
    url.pathname === '/'
      ? '/index.md'
      : `${url.pathname.replace(/\/$/, '')}.md`;
  return url.toString();
}

async function writeToClipboard(markdown: string): Promise<void> {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(markdown);
    return;
  }

  const textArea = document.createElement('textarea');
  textArea.value = markdown;
  textArea.setAttribute('readonly', '');
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  document.body.appendChild(textArea);
  textArea.select();

  try {
    if (!document.execCommand('copy')) {
      throw new Error('Clipboard copy command failed');
    }
  } finally {
    textArea.remove();
  }
}

export default function CopyPageButton(): ReactNode {
  const [status, setStatus] = useState<CopyStatus>('idle');
  const resetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  useEffect(
    () => () => {
      if (resetTimer.current) {
        clearTimeout(resetTimer.current);
      }
    },
    [],
  );

  const copyPage = async () => {
    setStatus('copying');

    try {
      const response = await fetch(getMarkdownUrl());
      if (!response.ok) {
        throw new Error(`Markdown request failed with ${response.status}`);
      }
      await writeToClipboard(await response.text());
      setStatus('success');
    } catch {
      setStatus('error');
    }

    if (resetTimer.current) {
      clearTimeout(resetTimer.current);
    }
    resetTimer.current = setTimeout(() => setStatus('idle'), 2000);
  };

  const isCopying = status === 'copying';

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        type="button"
        onClick={copyPage}
        disabled={isCopying}>
        <span aria-hidden="true" className={styles.icon}>
          {status === 'success' ? '✓' : status === 'error' ? '!' : '⧉'}
        </span>
        <span aria-live="polite">{labels[status]()}</span>
      </button>
    </div>
  );
}
