import React from "react";
import "./projects.css";
import ProjectSection from "../../components/projectSecion/projectSection";

const Projects = () => {
  const ProjectSectionConent = [
    {
      type: "video",
      src: "/imagesAndVideo/Video1.mp4",
      p1: "Hec Paris IEC",
      p2: "Branding, Digital, Strategy",
    },
    {
      type: "image",
      src: "/imagesAndVideo/Img3.webp",
      p1: "White coffee",
      p2: "BBranding, Strategy",
    },
    {
      type: "video",
      src: "/imagesAndVideo/Video2.mp4",
      p1: "Beev",
      p2: "Branding, Digital, Strategy",
    },
    {
      type: "image",
      src: "/imagesAndVideo/Img2.webp",
      p1: "Peugeot",
      p2: "Branding",
    },
    {
      type: "image",
      src: "/imagesAndVideo/Img1.webp",
      p1: "Branding, Digital, Strategy",
      p2: "Branding, Digital, Strategy",
    },
    {
      type: "video",
      src: "/imagesAndVideo/Video3.mp4",
      p1: "Hec Paris IEC",
      p2: "Branding, Digital, Strategy",
    },
    {
      type: "image",
      src: "/imagesAndVideo/img4.webp",
      p1: "White coffee",
      p2: "BBranding, Strategy",
    },
    {
      type: "video",
      src: "/imagesAndVideo/Video4.mp4",
      p1: "Beev",
      p2: "Branding, Digital, Strategy",
    },
    {
      type: "image",
      src: "/imagesAndVideo/img5.webp",
      p1: "Peugeot",
      p2: "Branding",
    },
    {
      type: "video",
      src: "/imagesAndVideo/Video5.mp4",
      p1: "Branding, Digital, Strategy",
      p2: "Branding, Digital, Strategy",
    },
    {
      type: "video",
      src: "/imagesAndVideo/Video6.mp4",
      p1: "Branding, Digital, Strategy",
      p2: "Branding, Digital, Strategy",
    },
    {
      type: "image",
      src: "/imagesAndVideo/img7.webp",
      p1: "Peugeot",
      p2: "Branding",
    },
    {
      type: "image",
      src: "/imagesAndVideo/img8.webp",
      p1: "Peugeot",
      p2: "Branding",
    },
  ];

  return (
    <>
      <div className="project__page">
        <div className="project__page-heading">
          <div className="container">
            <p>Discover</p>
            <div>
              <i>our</i>
              <p>projects</p>
            </div>
          </div>
        </div>
        <div className="projects__section">
          {ProjectSectionConent.map((item, index) => (
            <div className="grid_box" key={index}>
              <div>
                {item.type === "image" ? (
                  <img src={item.src} />
                ) : (
                  <video loop autoPlay muted src={item.src}></video>
                )}
              </div>
              <span>
                <p>{item.p1}</p>
                <p>{item.p2}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
