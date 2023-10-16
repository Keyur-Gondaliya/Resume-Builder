import React from "react";

export default function PersonalInfo() {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          <img src="assets/image/user-edit.png" alt="" className="img-fluid" />
          Personal Information
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <div className="row">
            <div className="col col-12 col-md-6">
              <div className="r-form-input">
                <label className="form-label">Job Title</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="e.g. Marketing Manager"
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input right-slide-input">
                <label className="form-label uload-title">
                  <img
                    src="assets/image/user.png"
                    alt=""
                    className="img-fluid upload-img"
                  />
                  <input type="file" className="d-none" />
                  Upload Photo
                </label>
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input">
                <label className="form-label">First Name</label>
                <input
                  type="email"
                  className="form-control valid-input"
                  placeholder="Your First Name"
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input right-slide-input">
                <label className="form-label">Last Name</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Last Name"
                />
              </div>
            </div>
            <div className="col col-12">
              <div className="r-form-input w-100">
                <label className="form-label">Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter a location"
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input">
                <label className="form-label">City</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="London"
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input right-slide-input">
                <label className="form-label">Postal Code</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="56273"
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input">
                <label className="form-label">Mobile no</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="+447975777666"
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input right-slide-input">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="sergiojohnson42@gmail.com"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
