import { useCallback, useLayoutEffect, useRef } from "react";
import useIsiOS from "./useIsiOS";

const useScrollLock = () => {
  const isiOS = useIsiOS();

  const scrollOffset = useRef(null);

  const lockScroll = useCallback(() => {
    document.documentElement.dataset.scrollLock = "true";
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.paddingRight = `var(--scrollbar-compensation)`;
    document.documentElement.style.backgroundColor = `#26262c`;

    if (isiOS) {
      console.log("im iOS!");
      scrollOffset.current = window.pageYOffset;
      document.documentElement.style.position = "fixed";
      document.documentElement.style.top = `-${scrollOffset.current}px`;
      document.documentElement.style.width = "100%";
    }
  }, [isiOS]);

  const unlockScroll = useCallback(() => {
    //must use "document.documentElement" instead of "document.body" for gatsby
    document.documentElement.style.overflow = "";
    document.documentElement.style.paddingRight = "";

    if (isiOS) {
      document.documentElement.style.position = "";
      document.documentElement.style.top = "";
      document.documentElement.style.width = "";
      window.scrollTo(0, scrollOffset.current);
    }

    //for sticky elements that would otherwise be displaced
    // document.documentElement.dataset.scrollLock = "false";
    //used to have document.body for some reason, but assume it was a typo. nothing seems to break.
    delete document.documentElement.dataset.scrollLock;
  }, [isiOS]);

  //for sticky elements that would otherwise be displaced
  useLayoutEffect(() => {
    const scrollBarCompensation =
      window.innerWidth - document.documentElement.offsetWidth;
    document.documentElement.style.setProperty(
      "--scrollbar-compensation",
      `${scrollBarCompensation}px`
    );
  }, []);

  return [lockScroll, unlockScroll];
};

export default useScrollLock;

//use sticky element scrollbar compensation when styling:
// [data-scroll-lock] .button--help {
//     margin-right: var(--scrollbar-compensation);
//   }
