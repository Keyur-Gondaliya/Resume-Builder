import React from "react";

export default function Skills() {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingnine">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsenine"
          aria-expanded="false"
          aria-controls="collapsenine"
        >
          <img src="assets/image/award.png" alt="" className="img-fluid" />
          Skills
        </button>
      </h2>
      <div
        id="collapsenine"
        className="accordion-collapse collapse"
        aria-labelledby="headingnine"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <div className="row">
            <div className="col col-12 col-md-6">
              <div className="r-form-input">
                <label className="form-label">Skill</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Team work"
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <html ng-app="ranger">
                <body ng-controller="MainCtrl">
                  <label className="form-label">
                    Level - <span>Experienced</span>{" "}
                  </label>
                  <div className="mySlider">
                    <input
                      type="text"
                      id="rangeSlider"
                      range-slider=""
                      model-from="priceFrom"
                      model-to="priceTo"
                      range-options="rangeOptions"
                    />
                    <span className="r-form-skills-points"></span>
                  </div>
                </body>
              </html>
            </div>
            <div className="col col-12">
              <div className="accordion add-employ" id="accordionadd3">
                <div className="accordion-item p-0">
                  <h2 className="accordion-header" id="headingten">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseten"
                      aria-expanded="false"
                      aria-controls="collapseten"
                    >
                      Add Skill
                    </button>
                  </h2>
                  <div
                    id="collapseten"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingten"
                    data-bs-parent="#accordionadd3"
                  >
                    <div className="accordion-body">hjvfvmvdhgvcfdgf</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
