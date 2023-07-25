import React from "react";
import Project from "./Project";
import Footer from "./Footer";

export default function Projects({ projects }) {
  return (
    <>
      <div className="container projects mt-5">
        <h2>Projects</h2>
        <div className="row justify-content-center justify-content-md-start">
          {projects.map((project, index) => (
            <Project
              key={index}
              name={project.name}
              src={project.img}
              previewLink={project.previewLink}
              sourceLink={project.sourceLink}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
