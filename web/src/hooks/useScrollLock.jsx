import { useCallback, useLayoutEffect } from "react";

const useScrollLock = () => {
  const isiOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  const lockScroll = useCallback(() => {
    const scrollBarCompenstation =
      window.innerWidth - document.documentElement.offsetWidth;
    let scrollOffset = document.documentElement.scrollTop();

    //must use "document.documentElement" instead of "document.body" for gatsby
    document.documentElement.style.overflow = "hidden";
    document.documentElement.style.paddingRight = `${scrollBarCompenstation}px`;

    //for sticky elements that would otherwise be displaced
    document.documentElement.style.paddingRight = `var(--scrollbar-compensation)`;
    document.documentElement.dataset.scrollLock = "true";

    if (isiOS) {
      // document.documentElement.scrollHeight
      scrollOffset.current = window.pageYOffset;
      document.documentElement.style.position = "fixed";
      document.documentElement.style.top = `-${scrollOffset.current}px`;
      document.documentElement.style.width = "100%";
    }
  }, []);

  const unlockScroll = useCallback(() => {
    const scrollOffset = document.documentElement.scrollTop();
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
    delete document.body.dataset.scrollLock;
  }, []);

  //for sticky elements that would otherwise be displaced
  useLayoutEffect(() => {
    const scrollBarCompensation =
      window.innderWidth - document.documentElement.offsetWidth;
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
