import React from "react";

export default function Slider() {
  return (
    <div className="slider" id="slider">
      <div className="slider-text">
        <div className="t1">
          <p className="text">Hello.</p>
          <p className="text-1"> I'm</p>
        </div>
        <p className="text-2">Yasin AKYAR</p>
        <p className="text-3">Web Developer And UI Designer</p>
        <p className="text-4">
          {" "}
          I'm always with soon technologies and trying to educate. I am open to
          research. The team is someone who can adapt easily and is an area
          where you will be in the team. I am energetic and verbal, who always
          works with a smile. I do not begin to cultivate and somehow cultivate
          in human care.
        </p>
      </div>
      <a href="#footer" className="slider-btn">
        Let's Talk
      </a>
      <div className="slider-my">
        <p className="text-4 check-my">Chech Out My</p>
        <div className="links">
          <a href="https://github.com/ysnkyrr" target="_blank">
            <img className="icons" src="/logo/github-icon.svg" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/yasin-akyar-58572a180/"
            target="_blank"
          >
            <img className="icons" src="/logo/linkedin-logo.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
