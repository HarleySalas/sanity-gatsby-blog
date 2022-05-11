import { useState, useEffect } from "react";
import throttle from "lodash/fp/throttle";

const useScrollTop = () => {
  const [isTop, setTop] = useState(true);

  const checkScrollTop = () => {
    if (window.scrollY > 0) {
      setTop(false);
    } else {
      setTop(true);
    }
  };

  //set scroll position on initial page load/refresh
  useEffect(() => {
    checkScrollTop();
  }, []);

  useEffect(() => {
    const handleScroll = throttle(172, () => {
      checkScrollTop();
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isTop;
};

export default useScrollTop;
