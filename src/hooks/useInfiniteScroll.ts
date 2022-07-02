import { useCallback, useRef } from 'react';

function useInfiniteScroll(fetchMore: () => any) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  const lastItemRef = useCallback((node: HTMLDivElement) => {
    console.log('node innerText: ', node?.innerText);
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // view port 기준으로 rootMargin 설정
    const options: IntersectionObserverInit = {
      rootMargin: '200% 0px',
    };
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        // fetch를 하기위한 callback
        fetchMore();
      }
    }, options);
    if (node) {
      observerRef.current.observe(node);
    }
  }, []);

  return {
    lastItemRef,
  };
}

export default useInfiniteScroll;
