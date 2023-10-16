import React from "react";

export default function Reference() {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingtwelve">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsetwelve"
          aria-expanded="false"
          aria-controls="collapsetwelve"
        >
          <img src="assets/image/plus.png" alt="" className="img-fluid" />
          Refrences
        </button>
      </h2>
      <div
        id="collapsetwelve"
        className="accordion-collapse collapse"
        aria-labelledby="headingtwelve"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <div className="row">
            <div className="col col-12 col-md-6">
              <div className="r-form-input">
                <label className="form-label">Refrence’s Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name of Refrence"
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input right-slide-input">
                <label className="form-label">Company</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company Name"
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input right-slide-input">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
