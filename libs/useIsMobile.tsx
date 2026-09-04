'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const useIsMobile = (breakpoint = 768) => {
  const pathname = usePathname();
  // Start false to match the server-rendered (desktop) markup; the real
  // value is read after mount so hydration never sees a text mismatch.
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [pathname, breakpoint]);

  return isMobile;
};
