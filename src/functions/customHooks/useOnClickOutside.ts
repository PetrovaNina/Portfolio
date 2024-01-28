import { useEffect, RefObject } from "react";

const useOnClickOutside = (
  ref: RefObject<HTMLElement>,
  callback: () => void
) => {
  const handleClick = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
    };
  }, [ref, callback]);
};

export default useOnClickOutside;
