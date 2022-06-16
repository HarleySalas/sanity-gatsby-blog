import React, { useEffect, useRef } from "react";
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies";
import { useStickyState, usePortal, useScrollLock } from "../../hooks";
import { isBrowser } from "../../lib/helpers";
import InlineLink from "../InlineLink/InlineLink";
import "./cookie-consent.scss";

import Button from "../Button/Button";

const CookieConsent = ({ location }) => {
  const Portal = usePortal();
  const [lockScroll, unlockScroll] = useScrollLock();
  const elRef = useRef(null);

  if (isBrowser()) {
    initializeAndTrack(location);
  }
  const [bannerHidden, setBannerHidden] = useStickyState(
    false,
    `consentCookieHidden`
  );

  const enableAnalytics = () => {
    document.cookie = "gatsby-gdpr-yandex-metrika=true";
    setBannerHidden(true);
  };

  useEffect(() => {
    if (!bannerHidden) {
      setTimeout(() => {
        lockScroll();
      }, 250);
    } else {
      unlockScroll();
    }

    return () => unlockScroll();
  }, [elRef, bannerHidden, lockScroll, unlockScroll]);

  return (
    <>
      {!bannerHidden && (
        <Portal>
          <div className="cookie-consent" ref={elRef}>
            <div className="cookie-consent__foreground">
              <div className="cookie-consent__box">
                <div className="container cookie-consent__container">
                  <div className="cookie-consent__wrapper">
                    <div className="cookie-consent__info">
                      Мы используем файлы cookie, чтобы улучшить работу сайта,
                      повысить его эффективность и удобство. Продолжая
                      пользоваться сайтом, вы соглашаетесь с использованием
                      файлов cookie.{" "}
                      <InlineLink linkTo="/privacy-policy">
                        Подробнее
                      </InlineLink>
                    </div>
                    <Button btnSize="sm" onClick={enableAnalytics}>
                      Принять
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default CookieConsent;
