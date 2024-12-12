'use client';

import { ScrollProvider } from '@/contexts/scroll-context';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ScrollProvider>
      {children}
    </ScrollProvider>
  );
}