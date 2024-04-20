import { useState, useEffect, useLayoutEffect } from "react";

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => window.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}

// -------------------------
// useBreakpoints

export function useBreakpoints() {
  const [isClient, setIsClient] = useState(false);

  const breakpoints = {
    isXs: useMediaQuery('(max-width: 640px)'),
    isSm: useMediaQuery('(min-width: 641px) and (max-width: 768px)'),
    isMd: useMediaQuery('(min-width: 769px) and (max-width: 1024px)'),
    isLg: useMediaQuery('(min-width: 1025px)'),
    active: 'SSR',
  };

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') setIsClient(true);
  }, []);

  if (isClient && breakpoints.isXs) breakpoints.active = 'xs';
  if (isClient && breakpoints.isSm) breakpoints.active = 'sm';
  if (isClient && breakpoints.isMd) breakpoints.active = 'md';
  if (isClient && breakpoints.isLg) breakpoints.active = 'lg';

  return breakpoints;
}
