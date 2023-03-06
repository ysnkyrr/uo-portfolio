import React from "react";

export default function Services() {
  return (
    <div className="services">
      <div className="services-con">
        <div className="services-text">
          <div className="t2">
            <p className="services-text">My </p>
            <p className="services-text-1"> Services</p>
          </div>
          <p className="services-text-2">What I Do</p>
        </div>
        <div className="my-services">
          <div className="services-boxs">
            <img
              src="/logo/ux-design-68.png"
              alt=""
              className="services-logo"
            />
            <p className="services-boxs-texts">UI-UX Design</p>
            <p className="services-boxs-text-1">
              I can make user-oriented designs that are easy to understand and
              take into account user habits.
            </p>
          </div>
          <div className="services-boxs">
            <img src="/logo/uı.png" className="services-logo" alt="" />
            <p className="services-boxs-texts">Graphic Design</p>
            <p className="services-boxs-text-1">
              I make designs that appeal to the tastes of users and my customers
              with their plain appearance.
            </p>
          </div>
          <div className="services-boxs">
            <img src="/logo/web-68px.png" className="services-logo" alt="" />
            <p className="services-boxs-texts">Web Development</p>
            <p className="services-boxs-text-1">
              I am constantly improving myself to keep up with new technologies,
              I can understand my customers' requests and put them into
              practice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
