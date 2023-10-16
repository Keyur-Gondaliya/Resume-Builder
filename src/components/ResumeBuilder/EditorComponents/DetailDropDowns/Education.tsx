import React from "react";

export default function Education() {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingfive">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsefive"
          aria-expanded="false"
          aria-controls="collapsefive"
        >
          <img src="assets/image/teacher.png" alt="" className="img-fluid" />
          Education
        </button>
      </h2>
      <div
        id="collapsefive"
        className="accordion-collapse collapse"
        aria-labelledby="headingfive"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <div className="r-form-history">
            <h6>Sergio Johndon, Jan 2017 - present</h6>
            <p className="m-0">
              <a href="#" className="text-decoration-none me-3">
                <img
                  src="assets/image/arrow-up.png"
                  alt=""
                  className="img-fluid"
                />
              </a>
              <a href="#" className="text-decoration-none me-3">
                <img
                  src="assets/image/trash.png"
                  alt=""
                  className="img-fluid"
                />
              </a>
              <a href="#" className="text-decoration-none">
                <img
                  src="assets/image/dwon_arrow.png"
                  alt=""
                  className="img-fluid"
                />
              </a>
            </p>
          </div>
          <div className="row">
            <div className="col col-12 col-md-6">
              <div className="r-form-input">
                <label className="form-label">School</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Okland High"
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input right-slide-input">
                <label className="form-label">Degree</label>
                <input type="text" className="form-control" placeholder="BA" />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input">
                <label className="form-label">Graduation Date</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Select date"
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input right-slide-input">
                <label className="form-label">City</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="London"
                />
              </div>
            </div>
            <div className="col col-12">
              <div className="r-form-input w-100">
                <label className="form-label">Description</label>
                <div id="editor2"></div>
              </div>
            </div>
            <div className="col col-12">
              <div className="accordion add-employ" id="accordionadd1">
                <div className="accordion-item p-0">
                  <h2 className="accordion-header" id="headingsix">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsesix"
                      aria-expanded="false"
                      aria-controls="collapsesix"
                    >
                      Add Education
                    </button>
                  </h2>
                  <div
                    id="collapsesix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingsix"
                    data-bs-parent="#accordionadd1"
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
