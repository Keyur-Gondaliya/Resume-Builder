import React, { useState } from "react";
import { Data, EducationHistory, formatDate } from "../../general";
interface Props {
  data: EducationHistory[];
  setData: React.Dispatch<React.SetStateAction<Data>>;
}
export default function Education({ data, setData }: Props) {
  const [education, setEducation] = useState<EducationHistory>({
    schoolName: "",
    location: "",
    degree: "",
    startDate: "",
    endDate: "",
    isStillStudying: false,
  });
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEducation((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
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
          {data.map((e, i) => (
            <div className="r-form-history">
              <h6>
                {e.schoolName}, {e.degree} {formatDate(e.startDate)} -{" "}
                {e.isStillStudying ? "present" : formatDate(e.endDate)}
              </h6>
              <p className="m-0">
                {/* <a  className="text-decoration-none me-3">
                <img
                  src="assets/image/arrow-up.png"
                  alt=""
                  className="img-fluid"
                />
              </a> */}
                <a
                  className="text-decoration-none me-3 cp"
                  onClick={() => {
                    setData((prev) => ({
                      ...prev,
                      educationHistory: data.filter((e1, i1) => i1 !== i),
                    }));
                  }}
                >
                  <img
                    src="assets/image/trash.png"
                    alt=""
                    className="img-fluid"
                  />
                </a>
                <a className="text-decoration-none cp">
                  <img
                    src="assets/image/dwon_arrow.png "
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
                <label className="form-label">School</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Greenwood High International School"
                  value={education.schoolName}
                  onChange={onChange}
                  name="schoolName"
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input right-slide-input">
                <label className="form-label">Degree</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ICSE"
                  value={education.degree}
                  onChange={onChange}
                  name="degree"
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input">
                <label className="form-label">Start Date</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Select date"
                  value={education.startDate}
                  onChange={onChange}
                  name="startDate"
                  max={new Date().toJSON().slice(0, 10)}
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input">
                <label className="form-label">End Date</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Select End"
                  value={education.endDate}
                  onChange={onChange}
                  name="endDate"
                  disabled={education.isStillStudying}
                  max={new Date().toJSON().slice(0, 10)}
                />
              </div>
            </div>
            <div className="col col-12">
              <div className="r-form-input d-flex align-items-center">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="Checkwork"
                  checked={education.isStillStudying}
                  onChange={() => {
                    setEducation((prev) => ({
                      ...prev,
                      endDate: "",
                      isStillStudying: !prev.isStillStudying,
                    }));
                  }}
                  name="isStillStudying"
                />
                <label
                  className="form-check-label form-label mb-0"
                  htmlFor="Checkwork"
                >
                  I currently Study here
                </label>
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input right-slide-input">
                <label className="form-label">City</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Bangalore"
                  value={education.location}
                  onChange={onChange}
                  name="location"
                />
              </div>
            </div>
            {/* <div className="col col-12">
              <div className="r-form-input w-100">
                <label className="form-label">Description</label>
                <div id="editor2"></div>
              </div>
            </div> */}
            <div className="col col-12">
              <div className="accordion add-employ" id="accordionadd1">
                <div className="accordion-item p-0">
                  <h2 className="accordion-header" id="headingsix">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      // data-bs-toggle="collapse"
                      // data-bs-target="#collapsesix"
                      // aria-expanded="false"
                      // aria-controls="collapsesix"
                      onClick={() => {
                        setData((prev) => ({
                          ...prev,
                          educationHistory: [
                            ...prev.educationHistory,
                            education,
                          ],
                        }));
                        setEducation({
                          schoolName: "",
                          location: "",
                          degree: "",
                          startDate: "",
                          endDate: "",
                          isStillStudying: false,
                        });
                      }}
                    >
                      Add Education
                    </button>
                  </h2>
                  {/* <div
                    id="collapsesix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingsix"
                    data-bs-parent="#accordionadd1"
                  >
                    <div className="accordion-body">hjvfvmvdhgvcfdgf</div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
