import React from "react";
import { useState } from "react";
import Footer from "./Footer";

export default function Contact() {
  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [message, setMessage] = useState("");

  return (
    <>
      <div className="container contact" id="contact">
        <div className="row">
          <div className="col-12 text-center">
            <h2>Contact Us</h2>
          </div>
        </div>
        <div className="row justify-content-around align-items-center">
          <div className="col-10 col-md-6 my-5">
            <form
              action="https://formsubmit.co/03b2b942cdad76418d22a2e433ded05b"
              method="POST"
            >
              <label for="username">User name</label>
              <input
                type="text"
                id="username"
                name="username"
                spellcheck="false"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />

              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label for="phone">Phone no.</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <label for="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="How Can We Help You?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>

              <button type="submit" id="submit-btn">
                Send
              </button>
            </form>
          </div>
          <div className="col-10 col-md-6">
            <lottie-player
              className="lottie"
              src="https://assets8.lottiefiles.com/packages/lf20_px0ntw70.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
