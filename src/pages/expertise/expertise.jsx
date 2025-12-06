import React, { useEffect, useRef, useState } from "react";
import "./expertise.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Expertise = () => {
  const defaultColor = {
    color: "#e7cfb1",
    bgColor: "#151414",
    borderColor: "#e7cfb1",
  };

  const firstColor = {
    color: "#151414",
    bgColor: "#bdabe2",
    borderColor: "#151414",
  };

  const secondColor = {
    color: "#151414",
    bgColor: "#9ac1cb",
    borderColor: "#151414",
  };

  const thirdColor = {
    color: "#151414",
    bgColor: "#f3c77c",
    borderColor: "#151414",
  };

  const [containerStyle, setContainerStyle] = useState(defaultColor);

  const purple = useRef(null);
  const blue = useRef(null);
  const yellow = useRef(null);

  const defaulColorSetter = () => {
    setContainerStyle(defaultColor);
  };

  const firstColorSetter = () => {
    setContainerStyle(firstColor);
  };

  const secondColorSetter = () => {
    setContainerStyle(secondColor);
  };

  const thirdColorSetter = () => {
    setContainerStyle(thirdColor);
  };

  const scrollContainerRef = useRef(null);
  const childRef = useRef(null);

  useGSAP(() => {
    gsap.to(".expertise__page", {
      scrollTrigger: {
        trigger: purple.current,
        // markers: true,
        start: "top 65%",
        end: "top -21% ",
        onToggle: (self) => {
          self.progress === 0 ? defaulColorSetter() : firstColorSetter();
        },
        onLeave: () => {
          secondColorSetter();
        },
      },
    });

    gsap.to(".expertise__page", {
      scrollTrigger: {
        trigger: yellow.current,
        // markers: true,
        start: "top 65%",
        end: "top -20%",
        onToggle: (self) => {
          self.progress === 0 && secondColorSetter();
          self.progress > 0 && thirdColorSetter();
          self.progress === 1 && defaulColorSetter();
        },
      },
    });

    const totalScrollWidth =
      scrollContainerRef.current.offsetWidth -
      childRef.current.scrollWidth -
      150;

    gsap.to(".left__scroll-container h1", {
      x: totalScrollWidth,
      scrollTrigger: {
        trigger: ".left__scroll-container",
        scrub: 1,
        pin: true,
        // markers:true
      },
    });
  });

  return (
    <>
      <div
        style={{
          color: containerStyle.color,
          backgroundColor: containerStyle.bgColor,
        }}
        className="expertise__page"
      >
        <div className="expertise__heading">
          <div className="container">
            <span>
              <i>For</i>
              <p>Help</p>
            </span>
            <span>
              <p>THE brands</p>
            </span>
            <span>
              <i>has</i>
              <p>Be more</p>
            </span>
            <span>
              <p>impactful</p>
            </span>
            <p className="heading__bottom">
              we work <br /> on three key levers
            </p>
          </div>
        </div>
        <div className="expertise__main-content">
          <div className="container" ref={purple}>
            <h4>Strategy & Ideas</h4>
            <span>
              <p>
                Convincing a consumer, user, investor, or prospective employee
                to trust you is difficult. They have other demands, established
                habits, and often little time to spare.
              </p>
              <p>
                Therefore, to succeed in creating a strong and consistent brand,
                to persuade, unite, and achieve widespread influence, you need
                to lay a solid strategic foundation.
              </p>
            </span>
            <div className="buttons">
              <p>Target analyses</p>
              <p>Positioning</p>
              <p>Brand platform</p>
              <p>Social Strategy</p>
              <p>Content strategy</p>
              <p>Digital strategy</p>
            </div>
          </div>
          <div className="container" ref={blue}>
            <h4>Strategy & Ideas</h4>
            <span>
              <p>
                Convincing a consumer, user, investor, or prospective employee
                to trust you is difficult. They have other demands, established
                habits, and often little time to spare.
              </p>
              <p>
                Therefore, to succeed in creating a strong and consistent brand,
                to persuade, unite, and achieve widespread influence, you need
                to lay a solid strategic foundation.
              </p>
            </span>
            <div className="buttons">
              <p>Target analyses</p>
              <p>Positioning</p>
              <p>Brand platform</p>
              <p>Social Strategy</p>
              <p>Content strategy</p>
              <p>Digital strategy</p>
            </div>
          </div>
          <div className="container" ref={yellow}>
            <h4>Strategy & Ideas</h4>
            <span>
              <p>
                Convincing a consumer, user, investor, or prospective employee
                to trust you is difficult. They have other demands, established
                habits, and often little time to spare.
              </p>
              <p>
                Therefore, to succeed in creating a strong and consistent brand,
                to persuade, unite, and achieve widespread influence, you need
                to lay a solid strategic foundation.
              </p>
            </span>
            <div className="buttons">
              <p>Target analyses</p>
              <p>Positioning</p>
              <p>Brand platform</p>
              <p>Social Strategy</p>
              <p>Content strategy</p>
              <p>Digital strategy</p>
            </div>
          </div>
        </div>
        <div ref={scrollContainerRef} className="left__scroll-container">
          <h1 ref={childRef}>Mantras</h1>
        </div>
      </div>
    </>
  );
};

export default Expertise;
