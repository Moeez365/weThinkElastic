import React, { useEffect, useRef, useState } from "react";
import "./NavBar.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NavBar = () => {
  let navComponent = ["Projects", "Expertise", "The team", "Contact"];

  const tl = useRef(null);

  const [navCondition, setNavCondition] = useState(false);

  const border1 = useRef(null);
  const border2 = useRef(null);

  useGSAP(() => {
    tl.current = gsap.timeline({
      paused: true,
      defaults: { ease: "power4.out" },
    });

    tl.current
      .to(border1.current, { y: 3, duration: 0.7 })
      .to(border2.current, { y: -3, duration: 0.7 }, 0)
      .to(border1.current, { rotate: 45 })
      .to(border2.current, { rotate: -45 }, 0.7)
      .to(".nav__mobile-offcanvas", { left: 0, duration: 0.6 }, 0.7)
      .from(
        ".moblie__offcanvas-link h1",
        { y: 80, duration: 0.8, stagger: 0.2, ease: "power4.out" },
        0.8
      );
  }, []);

  useEffect(() => {
    navCondition ? tl.current.play() : tl.current.reverse();
  }, [navCondition]);


  return (
    <>
      <nav>
        <img className="main__logo" src="/logo.png" alt="" />

        {/*Here is the desktop Navbar*/}
        <div className="nav__content nav__desktop-content">
          <ul className="nav__list">
            {navComponent.map((item, index) => (
              <li className="nav__list-items MyFont2" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* mobile Navbar button*/}
        <div className="nav__content nav__button-parent">
          <div
            className="nav__offcanvas-button"
            onClick={() => setNavCondition(!navCondition)}
          >
            <div ref={border1}></div>
            <div ref={border2}></div>
          </div>
        </div>
      </nav>

      {/* mobile Navbar offcanvas */}
      <div className="nav__mobile-offcanvas">
        <div className="moblie__offcanvas-link">
          {navComponent.map((item, index) => (
            <div key={index} className="offcanvas__link-container">
              <h1 className="MyFont1">{item.toUpperCase()}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
