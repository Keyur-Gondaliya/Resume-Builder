import React, { useState } from "react";
import { Data, EmploymentHistoryList, formatDate } from "../../general";
interface Props {
  data: EmploymentHistoryList[];
  setData: React.Dispatch<React.SetStateAction<Data>>;
}
export default function EmploymentHistory({ data, setData }: Props) {
  const [employment, setEmployment] = useState<EmploymentHistoryList>({
    jobTitle: "",
    companyName: "",
    location: "",
    startDate: "",
    endDate: "",
    isStillWorking: false,
    description: "",
  });
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmployment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

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
          {data.map((e, i) => (
            <div className="r-form-history" key={i}>
              <h6>
                {e.companyName} - {e.jobTitle}, {formatDate(e.startDate)} -{" "}
                {e.isStillWorking ? "present" : formatDate(e.endDate)}
              </h6>
              <p
                className="m-0"
                onClick={() => {
                  setData((prev) => ({
                    ...prev,
                    employmentHistory: data.filter((e1, i1) => i1 !== i),
                  }));
                }}
              >
                <a className="text-decoration-none me-3">
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
          ))}

          <div className="row">
            <div className="col col-12 col-md-6">
              <div className="r-form-input">
                <label className="form-label">Job Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="CEO"
                  value={employment.jobTitle}
                  onChange={onChange}
                  name="jobTitle"
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input right-slide-input">
                <label className="form-label">Company name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Sergio"
                  value={employment.companyName}
                  onChange={onChange}
                  name="companyName"
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-datepicker">
                <div className="r-form-input">
                  <label className="form-label">Start Date</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Jan 2017"
                    value={employment.startDate}
                    onChange={onChange}
                    name="startDate"
                  />
                </div>
                <div className="r-form-input">
                  <label className="form-label">End Date</label>
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Present"
                    value={employment.endDate}
                    onChange={onChange}
                    name="endDate"
                    disabled={employment.isStillWorking}
                  />
                </div>
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input right-slide-input">
                <label className="form-label">City</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Landon"
                  value={employment.location}
                  onChange={onChange}
                  name="location"
                />
              </div>
            </div>
            <div className="col col-12">
              <div className="r-form-input d-flex align-items-center">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="Checkwork"
                  checked={employment.isStillWorking}
                  onChange={() => {
                    setEmployment((prev) => ({
                      ...prev,
                      endDate: "",
                      isStillWorking: !prev.isStillWorking,
                    }));
                  }}
                  name="isStillWorking"
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
                  value={employment.description}
                  onChange={(e) => {
                    setEmployment((prev) => ({
                      ...prev,
                      description: e.target.value,
                    }));
                  }}
                  name="description"
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
                      onClick={() => {
                        setData((prev) => ({
                          ...prev,
                          employmentHistory: [
                            ...prev.employmentHistory,
                            employment,
                          ],
                        }));
                        setEmployment({
                          jobTitle: "",
                          companyName: "",
                          location: "",
                          startDate: "",
                          endDate: "",
                          isStillWorking: false,
                          description: "",
                        });
                      }}
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
