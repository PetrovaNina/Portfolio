import { useEffect, useState } from "react";

interface WindowSize {
  width: number;
  height: number;
}

const useWindowResize = (): WindowSize => {
  const isClient = typeof window === "object";

  const [windowSize, setWindowSize] = useState<WindowSize>(() => ({
    width: isClient ? window.innerWidth : 0,
    height: isClient ? window.innerHeight : 0,
  }));

  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    if (!isClient) return;

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowResize;
