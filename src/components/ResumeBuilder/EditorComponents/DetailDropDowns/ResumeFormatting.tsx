import React from "react";

export default function ResumeFormatting() {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <img src="assets/image/plus.png" alt="" className="img-fluid" />
          Resume Formatting
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <div className="row">
            <div className="col col-12 col-md-6">
              <div className="r-form-input">
                <label className="form-label">Template</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Choose best template"
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input right-slide-input">
                <label className="form-label">Resume Laguage</label>
                <select className="form-select form-control">
                  <option>English</option>
                  <option>Swedish</option>
                </select>
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input">
                <label className="form-label">Title Font</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Lato"
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input right-slide-input">
                <label className="form-label">Body Font</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Lato"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
