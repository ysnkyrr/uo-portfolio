import React from "react";

export default function Navbar() {
  return (
    <div className="header">
      <a href="">
        <img className="header-logo" src="/logo/uo-logo-green.png" alt="" />
      </a>
      <a className="header-item" href="">
        Home
      </a>
      <a className="header-item" href="#slider">
        About Me
      </a>
      <a className="header-item green" href="/quiz" target={"_blank"}>
        Quiz App
      </a>
      <a className="header-item" href="#footer">
        Contact Me
      </a>
    </div>
  );
}
