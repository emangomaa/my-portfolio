import React from "react";

export default function Tasks() {
  return (
    <div className="container" id="tasks">
      <div className="row tasks">
        <div className="col-12 text-center">
          <h2>Main Tasks</h2>
        </div>
        <div className="col-12 text-center">
          <h4>What I Can Do?</h4>
        </div>
        <div className="row my-5 justify-content-center">
          <div className="col-10 col-lg-7">
            <div className="row">
              <div className="col-12 col-md-6">
                <div>
                  <div className="img-box m-2">
                    <img src="assets/icons8-coding-64.png" alt="developing" />
                  </div>
                  <h3>Developing</h3>
                  <p>
                    using HTML, JavaScript, CSS, and other libraries to bring
                    concepts to life
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div>
                  <div className="img-box m-2">
                    <img
                      src="assets/icons8-maintenance-64.png"
                      alt="maintaining"
                    />
                  </div>
                  <h3>Maintaining</h3>
                  <p>Developing and maintaining the user interface</p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div>
                  <div className="img-box m-2">
                    <img
                      src="assets/icons8-smartphone-approve-64.png"
                      alt="implement"
                    />
                  </div>
                  <h3>Implement</h3>
                  <p>Implement Design on mobile websites</p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div>
                  <div className="img-box m-2">
                    <img src="assets/icons8-software-64.png" alt="managing" />
                  </div>
                  <h3>Managing</h3>
                  <p>managing software workflow</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-10 col-lg-5 align-self-center">
            <lottie-player
              className="lottie"
              src="https://assets10.lottiefiles.com/packages/lf20_ZcIjtY.json"
              background="transparent"
              speed="0.5"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </div>
  );
}
