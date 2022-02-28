import React, { useRef, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import People from "./img/people.webp";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { TimelineLite, Power2, Power3, gsap, TweenMax } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";

import Navbar from "./components/navbar/Navbar";

function App() {
  let container = useRef(null);
  let image = useRef(null);
  let textItem = useRef(null);

  gsap.registerPlugin(CSSRulePlugin);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  const tl = new TimelineLite();
  const helloText = new TimelineLite();
  useEffect(() => {
    helloText
      .to(textItem, 2.2, {
        opacity: 1,
        x: -90,
        ease: Power3.easeInOut,
        delay: 3.5,
      })
      .to(textItem, 0, {
        zIndex: 2,
      })
      .to(textItem, 1.5, {
        opacity: 1,
        scale: 2.5,
        x: 300,
        ease: Power3.easeInOut,
        delay: -0.2,
      });
  }, []);

  useEffect(() => {
    tl.to(container, 0, { css: { visibility: "visible" } })
      .to(imageReveal, 1.3, { width: "0%", ease: Power2.easeInOut })
      .from(image, 1.3, { scale: 1.4, ease: Power2.easeInOut, delay: -1.3 })
      .from(imageReveal, 4.5, { width: "0%", ease: Power2.easeInOut });
  });
  return (
    <div>
      {/* <Navbar /> */}
      <section className="main">
        <div ref={(el) => (container = el)} className="container">
          <>
            <p
              ref={(el) => {
                textItem = el;
              }}
              className="title"
            >
              Hello
              <button>Discover Africa</button>
            </p>
          </>
          <>
            <div className="img-container">
              <img ref={(el) => (image = el)} src={People} alt="" />
            </div>
          </>
        </div>
      </section>
    </div>
  );
}

export default App;
