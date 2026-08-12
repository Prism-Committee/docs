import type {ReactNode} from 'react';
import CopyPageButton from '@site/src/components/CopyPageButton';
import OriginalDocItemContent from '@theme-original/DocItem/Content';
import type {Props} from '@theme/DocItem/Content';

export default function DocItemContent(props: Props): ReactNode {
  return (
    <>
      <CopyPageButton />
      <OriginalDocItemContent {...props} />
    </>
  );
}
