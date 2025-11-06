import React, { use } from "react";
import "./Footer.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const content = [
    "You have a beautiful",
    "Project? Let's talk",
    "about it.",
    "around a Good coffee",
  ];

  useGSAP(() => {
    gsap.from(".footer__upper-container .content p", {
      y: 30,
      stagger: 0.1,
      ease: "power1.out",
      scrollTrigger: {
        trigger: ".footer__upper-container",
        // markers:true,
        start: "top 90%",
        scrub: 2,
        end: "top 10%",
      },
    });
  }, []);

  return (
    <>
      <div className="footer">
        <div className="footer__upper-container">
          <div className="content">
            {content.map((item, index) => (
              <div key={index}>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="gif-container">
            <img src="/cafe.gif" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
