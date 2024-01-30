import { RefObject, useEffect, useState } from "react";

function calculateThreshold(ref: RefObject<HTMLElement | null>): number {
  const elementHeight = ref.current?.getBoundingClientRect().height || 0;
  const screenHeight = window.innerHeight;

  if (elementHeight === 0) {
    return 0;
  }

  // Calculate the ratio of screenHeight to elementHeight
  const ratio = screenHeight / elementHeight;

  // Ensure the threshold is between 0 and 1
  const threshold = Math.min(0.9, Math.max(0, ratio));

  const adjustedThreshold = threshold - 0.2;

  return Number(adjustedThreshold.toFixed(1));
}

export function useOnScreen(ref: RefObject<HTMLElement | null>): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { threshold: calculateThreshold(ref) }
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
