import { useEffect, useState, RefObject } from "react";

export function useOnScreen(ref: RefObject<HTMLElement | null>): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: 0.7 }
    );

    if (ref.current) observer.observe(ref.current);

    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

export interface ImperativeRef {
  onVisible?: (id: string | null) => void;
}

export function useCallOnVisible(
  ref: RefObject<HTMLElement | null>,
  imperativeRef: RefObject<ImperativeRef | null>
): void {
  const isSectionOnScreen = useOnScreen(ref);

  useEffect(() => {
    if (isSectionOnScreen && imperativeRef?.current?.onVisible) {
      imperativeRef.current.onVisible(ref?.current?.id || null);
    }
  }, [isSectionOnScreen, imperativeRef, ref]);
}
