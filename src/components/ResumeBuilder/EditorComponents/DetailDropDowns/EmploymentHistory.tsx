import React from "react";

export default function EmploymentHistory() {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          <img src="assets/image/briefcase.png" alt="" className="img-fluid" />
          Employment History
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <div className="r-form-history">
            <h6>Sergio Johndon, Jan 2017 - present</h6>
            <p className="m-0">
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
                <label className="form-label">Job Title</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="CEO"
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input right-slide-input">
                <label className="form-label">Employer</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Sergio"
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-datepicker">
                <div className="r-form-input">
                  <label className="form-label">Start Date</label>
                  <input
                    type="time"
                    className="form-control"
                    placeholder="Jan 2017"
                  />
                </div>
                <div className="r-form-input">
                  <label className="form-label">End Date</label>
                  <input
                    type="time"
                    className="form-control"
                    placeholder="Present"
                  />
                </div>
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input right-slide-input">
                <label className="form-label">City</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Landon"
                />
              </div>
            </div>
            <div className="col col-12">
              <div className="r-form-input d-flex align-items-center">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="Checkwork"
                  checked
                />
                <label
                  className="form-check-label form-label mb-0"
                  htmlFor="Checkwork"
                >
                  I currently work here
                </label>
              </div>
            </div>
            <div className="col col-12">
              <div className="r-form-input w-100">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  cols={30}
                  rows={7}
                  placeholder="Type something about your job profile."
                ></textarea>
              </div>
            </div>
            <div className="col col-12">
              <div className="accordion add-employ" id="accordionadd">
                <div className="accordion-item p-0">
                  <h2 className="accordion-header" id="headingfour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsefour"
                      aria-expanded="false"
                      aria-controls="collapsefour"
                    >
                      Add Employment
                    </button>
                  </h2>
                  <div
                    id="collapsefour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingfour"
                    data-bs-parent="#accordionadd"
                  >
                    <div className="accordion-body"></div>
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
