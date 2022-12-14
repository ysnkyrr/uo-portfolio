import React from "react";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="ph">
        <img className="i1" src="/logo/phone-1-logo.png" />
        <p className="y1">Call Us On</p>
        <p className="y2">
          <a className="tel-mail" href="tel:05059790658">
            05059790658
          </a>
        </p>
      </div>
      <div className="ph">
        <img className="i1" src="/logo/mail-logo.png" />
        <p className="y1">Email Us At</p>
        <p className="y2">
          <a className="tel-mail" href="mailto:ysnkyr06@gmail.com">
            ysnkyr06@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
