import React from "react";

export default function Skill({ name, src }) {
  return (
    <div class="col-12 col-sm-6 col-md-4 col-lg-2">
      <div class="skill-box my-3 p-1">
        <div class="img-box my-3">
          <img src={"assets/" + src} alt={name} />
        </div>
        <h3>{name}</h3>
      </div>
    </div>
  );
}
