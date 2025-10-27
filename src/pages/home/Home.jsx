import React, { useRef } from "react";
import "./Home.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroContent = ["h", "e", "l", "l", "o"];

  const video = useRef();
  const containerRef = useRef();

  const Ref = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".home__hero-container h1", {
      y: 500,
      duration: 0.8,
      stagger: 0.1,
    });

    gsap.from(video.current, {
      width: "10cm",
      // duration: 3,
      scrollTrigger: {
        trigger: video.current,
        scrub: 2,
        end: "top 0%",
        start: "top 95%",
      },
    });

    gsap.from(".home .home__text p, .home .home__text i", {
      y: 500,
      stagger: 0.1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".home .home__text-container",
        start: "top 80%",
        end: "top 0%",
      },
    });

    gsap.from(
      ".home__grid-container .grid_box div video, .home__grid-container .grid_box div img",
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

    const textWidth = Ref.current.scrollWidth;
    const containerWidth = containerRef.current.offsetWidth;
    const distance = textWidth - containerWidth; // how far to move
    console.log(containerWidth);
    
    console.log(distance);
    

    gsap.to(".home__pin h1", {
      x: -distance-90,
      ease: "none",
      scrollTrigger: {
        trigger: ".home__pin",
        scrub: 2,
        pin: true,
        markers: true,
        end: "top -50%",
      },
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
            <i className="text-line-height">We</i>
            <p className="MyFont1 text-style text-line-height">help</p>
          </div>
          <div className="text-flex">
            <p className="text-style text-line-height">The</p>
            <p className="text-style text-line-height">Brands</p>
          </div>
          <div className="text-flex top__text">
            <i className="text-line-height">To</i>
            <p className="text-style text-line-height">Grow</p>
          </div>
          <div className="text-flex">
            <p className="text-style">Faster</p>
            <div className="chidren__text-content">
              <p>thanks to storytelling</p>
              <p>impacting an identity</p>
              <p>strong visual interfaces</p>
              <p>ultra-smooth digital</p>
            </div>
          </div>
        </div>
      </div>
      <div className="home__grid">
        <div className="home__grid-container">
          <div className="grid_box">
            <div>
              {" "}
              <video src="/imagesAndVideo/Video1.mp4"></video>
            </div>
            <span>
              <p>Hec Paris IEC</p>
              <p>Branding, Digital, Strategy</p>
            </span>
          </div>

          <div className="grid_box">
            <div>
              <img src="/imagesAndVideo/Img3.webp" alt="" />
            </div>
            <span>
              <p>Hec Paris IEC</p>
              <p>Branding, Digital, Strategy</p>
            </span>
          </div>

          <div className="grid_box">
            <div>
              <video src="/imagesAndVideo/Video2.mp4"></video>
            </div>
            <span>
              <p>Hec Paris IEC</p>
              <p>Branding, Digital, Strategy</p>
            </span>
          </div>

          <div className="grid_box">
            <div>
              <img src="/imagesAndVideo/Img2.webp" alt="" />
            </div>
            <span>
              <p>Hec Paris IEC</p>
              <p>Branding, Digital, Strategy</p>
            </span>
          </div>

          <div className="grid_box">
            <div>
              <img src="/imagesAndVideo/Img1.webp" alt="" />
            </div>
            <span>
              <p>Hec Paris IEC</p>
              <p>Branding, Digital, Strategy</p>
            </span>
          </div>
        </div>
      </div>
      <div ref={containerRef} className="home__pin">
        <h1 ref={Ref}>Expertise</h1>
      </div>
    </section>
  );
};

export default Home;
