'use client';

import { skipToContent } from '@/lib/utils/accessibility';

export const SkipToContent = () => {
  return (
    <button
      onKeyDown={skipToContent}
      className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black"
    >
      Skip to content
    </button>
  );
};