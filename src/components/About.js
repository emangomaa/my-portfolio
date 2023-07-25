import React from "react";
import Tasks from "./Tasks";
import Footer from "./Footer";

export default function About() {
  return (
    <>
      <div class="about" id="about">
        <div class="overlay">
          <div class="row justify-content-center align-items-center text-center">
            <div class="col-8">
              <h2>About Me</h2>
              <p class="lead">
                A software engineer, who loves building websites and
                Applications with interactive UIs, with proven leadership,
                communication, and analysis skills, seeking a position as a
                frontend engineer, experienced in front-end development using
                React JS. as well as, proficiency in using JavaScript, with a
                focus on back-end development using NodeJS, Express, and
                MongoDB.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Tasks />
      <Footer />
    </>
  );
}
