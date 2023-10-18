import React from "react";
import { Data, Reference } from "../../general";
interface Props {
  data: Reference;
  setData: React.Dispatch<React.SetStateAction<Data>>;
}
export default function Reference({ data, setData }: Props) {
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setData((prev) => ({
      ...prev,
      referance: { ...prev.referance, [e.target.name]: e.target.value },
    }));
  }
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
          Refrence
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
                  value={data.name}
                  onChange={onChange}
                  name="name"
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
                  value={data.company}
                  onChange={onChange}
                  name="company"
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
                  value={data.phone}
                  onChange={onChange}
                  name="phone"
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
