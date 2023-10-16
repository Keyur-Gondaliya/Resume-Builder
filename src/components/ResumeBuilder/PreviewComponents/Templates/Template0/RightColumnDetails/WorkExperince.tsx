import React from "react";

export default function WorkExperince() {
  return (
    <div className="preview-work-list">
      <h6 className="work-main-title">work Experience</h6>
      {[1, 2, 3, 4].map((e, i) => (
        <div className="preview-work-points" key={i}>
          <p className="work-title">CEO</p>
          <p className="work-subtitle">Eldring games | stockhclm</p>
          <p className="work-date">jan 2020 - mar 2022</p>
          <p className="work-discription">
            Auctor interdum parturient suspendisse magna facilisis. Amet,
            interdum suspendisse eget urna, malesuada sed dui massa. Sit ipsum
            tincidunt lacus.
          </p>
        </div>
      ))}
    </div>
  );
}
