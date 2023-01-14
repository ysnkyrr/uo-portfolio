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
      <div className="dropdown header-item ">
        <button class="dropbtn ">My Projects</button>
        <div className="dropdown-content">
          <a className="" href="/coin" target={"_blank"}>
            Coin App
          </a>
          <a className="" href="/weather" target={"_blank"}>
            Weather App
          </a>
          <a className="" href="/quiz" target={"_blank"}>
            Quiz App
          </a>
          <a className="" href="/flag" target={"_blank"}>
            Flag App
          </a>
        </div>
      </div>
      <a className="header-item" href="#footer">
        Contact Me
      </a>
    </div>
  );
}
