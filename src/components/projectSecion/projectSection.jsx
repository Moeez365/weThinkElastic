import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

const ProjectSection = ({ children }) => {
  useGSAP(() => {
    gsap.from(
      ".home__grid-container .grid_box video, .home__grid-container .grid_box img",
      {
        y: 100,
        // duration:5,
        scrollTrigger: {
          trigger: ".home__grid-container",
          // markers:true,
          scrub: 2,
          start: "top 90%",
          end: "top -400%",
          ease: "power3.out",
        },
      }
    );
  },[]);

  return (
    <>
      {/* all the css is on the home.css */}
      <div className="home__grid">
        <div className="home__grid-container">{children}</div>
      </div>
    </>
  );
};

export default ProjectSection;
