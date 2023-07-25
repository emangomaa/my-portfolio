import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Capablities from "./Capablities";
import Skills from "./Skills";
import { skills } from "../data";
export default function Home() {
  return (
    <>
      <div className="container home-section" id="home">
        <div className="row">
          <div className="col-12 col-lg-7 mb-5">
            <span>Hi,I am</span>
            <h1>Eman Gomaa</h1>
            <h2>frontend developer</h2>
            <p>
              A software engineer, who loves building websites and Applications
              with interactive UI, experienced in front-end development using
              React JS. as well as, proficiency in using JavaScript, with a
              focus on back-end development using NodeJS, Express, and MongoDB.
            </p>
            <div className="links">
              <Link className="project-btn px-2" to="/projects">
                Projects
              </Link>
              <Link
                className="cv-btn px-2"
                to="https://drive.google.com/file/d/1f7LZf0BIPk4UDdwiUtvWXwEF8WDUwOTQ/view?usp=sharing"
              >
                My CV
              </Link>
            </div>
          </div>
          <div className="lottie-player col-12 col-lg-5 mb-5">
            <lottie-player
              className="lottie"
              src="https://assets10.lottiefiles.com/packages/lf20_lcsx30ez.json"
              background="transparent"
              speed="0.3"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
      <Capablities />
      <Skills skills={skills} />
      <Footer />
    </>
  );
}
