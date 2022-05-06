import '../styles/main.css';
import "../styles/bootstrap.min.css";
import { useEffect, useState } from "react";
import GlobalState from "../GlobalState";
import Router from 'next/router';
import axios from 'axios';
import 'react-orgchart/index.css';

axios.defaults.baseURL = 'https://idml-backend.hellotree.dev/api';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  function inViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return (
      top < (window.pageYOffset + window.innerHeight) &&
      left < (window.pageXOffset + window.innerWidth) &&
      (top + height) > window.pageYOffset &&
      (left + width) > window.pageXOffset
    );
  }
  function getPercentangeInViewport(el) {
    var elHeight = el.offsetHeight;
    var elOffsetTop = el.offsetTop;
    var elOffsetBottom = elOffsetTop + elHeight;

    while (el.offsetParent) {
      el = el.offsetParent;
      elOffsetTop += el.offsetTop;
    }

    var pageOffsetTop = window.pageYOffset + window.innerHeight;

    return 100 * (pageOffsetTop - elOffsetTop) / (elOffsetBottom + window.innerHeight - elOffsetTop);
  }

  function triggerScroll() {
    var animatedElements = document.querySelectorAll('[animate]');
    for (let i = 0; i < animatedElements.length; i++) {
      if (inViewport(animatedElements[i])) {
        animatedElements[i].classList.add('show');
      } else {
        animatedElements[i].classList.remove('show');
      }
    }

    var scrollStylesElements = document.querySelectorAll('[scroll-styles]');
    for (let i = 0; i < scrollStylesElements.length; i++) {
      scrollStylesElements[i].style.transform = "translate(0," + ((-getPercentangeInViewport(scrollStylesElements[i]) + 50) * scrollStylesElements[i].getAttribute('scroll-styles')) + "%)";
    }
  }

  function calcMinHeight() {
    document.querySelector('.min-height-js').style.minHeight = (window.innerHeight - document.querySelector('.footer').clientHeight) + "px";
  }

  useEffect(() => {

    const cursorRounded = document.querySelector('.cursor.round');
    const cursorPointed = document.querySelector('.cursor.pointed');

    const moveCursor = (e) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;

      cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }

    // window.addEventListener('mousemove', moveCursor)


    window.addEventListener('scroll', triggerScroll);
    window.addEventListener("scroll", triggerScroll);
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <GlobalState.Provider value={{ triggerScroll, calcMinHeight }}>
      <div className="cursor round"></div>
      <div className="cursor pointed"></div>
      {
        loading ? (
          <div className="loader">
            <div className="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
        ) : (
          <Component {...pageProps} />
        )}
    </GlobalState.Provider>
  );
}
export default MyApp;