import React from "react";
import { Data, PersonalInfo } from "../../general";
interface Props {
  data: PersonalInfo;
  setData: React.Dispatch<React.SetStateAction<Data>>;
}
export default function PersonalInfo({ data, setData }: Props) {
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [e.target.name]: e.target.value },
    }));
  }
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
                  type="text"
                  className="form-control"
                  placeholder="e.g. Marketing Manager"
                  value={data.jobTitle}
                  onChange={onChange}
                  name="jobTitle"
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
                  type="text"
                  className="form-control valid-input"
                  placeholder="Your First Name"
                  value={data.firstName}
                  onChange={onChange}
                  name="firstName"
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input right-slide-input">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Last Name"
                  value={data.lastName}
                  onChange={onChange}
                  name="lastName"
                />
              </div>
            </div>
            <div className="col col-12">
              <div className="r-form-input w-100">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter a location"
                  value={data.address}
                  onChange={onChange}
                  name="address"
                />
              </div>
            </div>
            {/* <div className="col col-12 col-md-6">
              <div className="r-form-input">
                <label className="form-label">City</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="London"
                  value={data.city}
                  onChange={onChange}
                  name="city"
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input right-slide-input">
                <label className="form-label">Postal Code</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="56273"
                  value={data.postalCode}
                  onChange={onChange}
                  name="postalCode"
                />
              </div>
            </div> */}
            <div className="col col-12 col-md-6">
              <div className="r-form-input">
                <label className="form-label">Mobile no</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="+447975777666"
                  value={data.mobileNo}
                  onChange={onChange}
                  name="mobileNo"
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
                  value={data.email}
                  onChange={onChange}
                  name="email"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
