import React from "react";
import { Link } from "react-router-dom";
export default function Project({ name, src, previewLink, sourceLink }) {
  return (
    <div className="col-10 col-sm-6 col-md-4 col-lg-3 p-3">
      <div className="d-flex flex-column project row-gap-3 p-4 mt-4 text-center">
        <h5>{name}</h5>
        <img src={"assets/" + src} alt={name} />
        <Link to={previewLink} className="btn btn-primary">
          Preview
        </Link>
        <Link to={sourceLink} className="btn btn-info">
          Sourse Code
        </Link>
      </div>
    </div>
  );
}
