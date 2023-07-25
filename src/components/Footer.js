import React from "react";
import { Link } from "react-router-dom";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
export default function Footer() {
  return (
    <div className="container-fluid footer">
      <div className="row text-center">
        <div className="col-12 mb-3">
          <Link className="icon mx-2" to="https://github.com/emangomaa">
            <BsGithub />
          </Link>
          <Link
            className="icon mx-2"
            to="https://www.linkedin.com/in/eman-gomaa"
          >
            <BsLinkedin />
          </Link>
          <Link className="icon mx-2" to="mailto:emangomaa149@gmail.com">
            <HiMail />
          </Link>
        </div>
        <div className="col-12">
          <span>
            &copy;All Rights Reserved to Eman Gomaa {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </div>
  );
}
