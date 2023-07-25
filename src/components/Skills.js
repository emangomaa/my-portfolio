import React from "react";
import Skill from "./Skill";

export default function Skills({ skills }) {
  return (
    <div class="skills" id="skills">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <h2>Skills</h2>
          </div>
          <div class="col-12 text-center">
            <h4>Some Of My Skills</h4>
          </div>
          <div class="row my-5">
            {skills.map((skill, index) => (
              <Skill key={index} name={skill.name} src={skill.src} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
