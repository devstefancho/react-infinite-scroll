import { useCallback, useRef } from 'react';

function useInfiniteScroll(loadMore: () => any) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const lastItemRef = useCallback((node: HTMLDivElement) => {
    console.log('node innerText: ', node?.innerText);
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log('load more page');
        loadMore();
      }
    });
    if (node) {
      observerRef.current.observe(node);
    }
  }, []);

  return {
    lastItemRef,
  };
}

export default useInfiniteScroll;
