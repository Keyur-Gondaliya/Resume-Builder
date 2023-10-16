import React from "react";

export default function Header() {
  return (
    <div className="r-form-heading">
      <h2 className="r-form-heading-title">Untitled01</h2>
      <div className="progress">
        <span
          className="title timer"
          data-from="0"
          data-to="85"
          data-speed="1800"
        >
          87%
        </span>
        <div className="overlay"></div>
        <div className="left"></div>
        <div className="right"></div>
      </div>
    </div>
  );
}
