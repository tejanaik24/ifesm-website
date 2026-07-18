'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const useIsMobile = () => {
  const pathname = usePathname();
  // Start false to match the server-rendered (desktop) markup; the real
  // value is read after mount so hydration never sees a text mismatch.
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [pathname]);

  return isMobile;
};
