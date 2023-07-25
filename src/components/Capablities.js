import React from "react";

export default function Capablities() {
  return (
    <div class="capablities p-4" id="capabilities">
      <div class="container">
        <div class="row justify-content-around">
          <div class="col-12 p-3 my-3">
            <h2>Capabilities</h2>
          </div>
          <div class="col-10 col-lg-4 capablities-box p-2">
            <div class="capablities-content p-4">
              <h3>Frontend Developer</h3>
              <ul class="m-2">
                <li>determining the structure and design of web pages</li>
                <li>
                  striking a balance between functional and aesthetic design
                </li>
                <li>ensuring web design is optimized for smartphones</li>
              </ul>
            </div>
          </div>
          <div class="col-10 col-lg-4 capablities-box p-3">
            <lottie-player
              src="https://assets4.lottiefiles.com/packages/lf20_hkgn7rqg.json"
              background="transparent"
              speed="0.5"
              style={{ width: "250px", height: "250px", margin: "auto" }}
              loop
              autoplay
            ></lottie-player>
          </div>
          <div class="col-10 col-lg-4 capablities-box p-2">
            <div class="capablities-content p-4">
              <h3>React JS Developer</h3>
              <ul class="m-2">
                <li>
                  developing and implementing components using React.js concepts
                </li>
                <li>profiling and improving front-end performance</li>
                <li>
                  design and build components to enhance application performance
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
