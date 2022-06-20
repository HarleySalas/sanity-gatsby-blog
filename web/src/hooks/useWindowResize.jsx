import { throttle } from "../lib/helpers";
import { useEffect, useMemo, useCallback, useState } from "react";

const useWindowResize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window ? window.innerWidth : null,
    height: window ? window.innerHeight : null,
  });

  const handleWindowResize = useCallback(() => {
    setWindowSize({
      width: window ? window.innerWidth : null,
      height: window ? window.innerHeight : null,
    });
  }, []);

  const throttledHandleWindowResize = useMemo(
    () => throttle(handleWindowResize, 500),
    [handleWindowResize]
  );

  const onWindowResize = useCallback(() => {
    throttledHandleWindowResize();
  }, [throttledHandleWindowResize]);

  useEffect(() => {
    window && window.addEventListener("resize", onWindowResize);
    // onWindowResize();
    return () => window.removeEventListener("resize", onWindowResize);
  }, [onWindowResize]);

  return windowSize;
};

export default useWindowResize;
