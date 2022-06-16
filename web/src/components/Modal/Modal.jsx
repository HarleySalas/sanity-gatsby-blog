import React, {
  forwardRef,
  useImperativeHandle,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { usePortal, useToggle, useScrollLock } from "../../hooks";
import { window } from "browser-monads";
import "./modal.scss";

const Modal = forwardRef((props, ref) => {
  const [display, toggleDisplay] = useToggle(props.initialDisplay);
  const Portal = usePortal();
  const foregroundRef = useRef(null);
  const [lockScroll, unlockScroll] = useScrollLock();

  useImperativeHandle(ref, () => {
    return {
      openModal: () => handleOpen(),
      closeModal: () => handleClose(),
      toggleModal: () => handleToggle(),
    };
  });

  const handleOpen = () => {
    toggleDisplay(true);
  };

  const handleClose = useCallback(() => {
    toggleDisplay(false);
  }, [toggleDisplay]);

  const handleToggle = () => {
    toggleDisplay();
  };

  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.keyCode === 27) {
        handleClose();
      }
    };
    const handleClickOutside = (e) => {
      if (e.target === foregroundRef.current) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEscKey);
    window.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("touchstart", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleEscKey);
      window.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("touchstart", handleClickOutside);
    };
  }, [handleClose]);

  useEffect(() => {
    if (display) {
      lockScroll();
    }

    if (!display) {
      unlockScroll();
    }

    return () => unlockScroll();
  }, [display, lockScroll, unlockScroll]);

  if (display) {
    return (
      <Portal>
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="dialog1_label"
        >
          <div className="modal__foreground" ref={foregroundRef}>
            {props.children}
          </div>
        </div>
      </Portal>
    );
  }
  return null;
});

export default Modal;
