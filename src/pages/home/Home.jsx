import React, { useRef } from "react";
import "./Home.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroContent = ["h", "e", "l", "l", "o"];

  const video = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".home__hero-container h1", {
      y: 500,
      duration: 1,
      stagger: 0.1,
    });

    gsap.from(video.current, {
      width:"10cm",
      // duration: 3,
      scrollTrigger:{
        trigger: video.current,         
        scrub:2,
        end:"top 35%",
      }
    });
  });

  return (
    <section className="home">
      <div className="home__hero">
        <div className="home__hero-container">
          <div className="h1__content">
            {heroContent.map((item, index) => (
              <h1 className="MyFont1" key={index}>
                {item}
              </h1>
            ))}
          </div>
          <div className="bottom__hero-content">
            <div className="content MyFont2">
              <span>We are the team</span>
              <span>we think elastic</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home__video">
        <div className="home__video-container">
          <video ref={video} autoPlay muted loop src="/video-start.mp4"></video>
        </div>
      </div>
      <div className="home__text">
        <div className="home__text-container">
          <div className="top__text text-flex">
            <i className="text-line-height">we</i>
            <p className="MyFont1 text-style text-line-height">help</p>
          </div>
          <div className="text-flex">
              <p className="text-style text-line-height">The</p>
              <p className="text-style text-line-height">Brands</p>
          </div>
          <div className="text-flex top__text">
            <i className="text-line-height">to</i>
            <p className="text-style text-line-height">Grow</p>
          </div>
          <p className="text-flex text-style">
            faster
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
