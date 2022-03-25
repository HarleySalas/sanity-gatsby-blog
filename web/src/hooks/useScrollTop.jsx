import { useState, useEffect } from "react";
import throttle from "lodash/fp/throttle";

const useScrollTop = () => {
  const [isTop, setTop] = useState(true);

  useEffect(() => {
    const handleScroll = throttle(172, () => {
      if (window.scrollY > 0) {
        setTop(false);
      } else {
        setTop(true);
      }
    });

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isTop;
};

export default useScrollTop;
