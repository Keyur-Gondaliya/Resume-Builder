import React from "react";

export default function Websites() {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingseven">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseseven"
          aria-expanded="false"
          aria-controls="collapseseven"
        >
          <img src="assets/image/global.png" alt="" className="img-fluid" />
          Website and Social Links
        </button>
      </h2>
      <div
        id="collapseseven"
        className="accordion-collapse collapse"
        aria-labelledby="headingseven"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <div className="row">
            <div className="col col-12 col-md-6">
              <div className="r-form-input">
                <label className="form-label">Label</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add your Label"
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input right-slide-input">
                <label className="form-label">Link</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add Custom Link"
                />
              </div>
            </div>
            <div className="col col-12">
              <div className="accordion add-employ" id="accordionadd2">
                <div className="accordion-item p-0">
                  <h2 className="accordion-header" id="headingeight">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseeight"
                      aria-expanded="false"
                      aria-controls="collapseeight"
                    >
                      Add Links
                    </button>
                  </h2>
                  <div
                    id="collapseeight"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingeight"
                    data-bs-parent="#accordionadd2"
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
