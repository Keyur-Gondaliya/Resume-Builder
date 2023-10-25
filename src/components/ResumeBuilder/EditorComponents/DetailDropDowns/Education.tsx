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
  function appendNewRecord(e: React.FormEvent) {
    e.preventDefault();
    setData((prev) => ({
      ...prev,
      educationHistory: [...prev.educationHistory, education],
    }));
    setEducation({
      schoolName: "",
      location: "",
      degree: "",
      startDate: "",
      endDate: "",
      isStillStudying: false,
    });
  }
  const [updateHeader, setUpdateHeader] = useState<boolean>(false);

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
            <div key={e.schoolName + i} id={`educationHistoryParent${i}`}>
              <h2
                className="accordion-header"
                id={"headingEducationHistory" + i}
                style={{ marginBottom: "10px" }}
                onClick={() => {
                  setUpdateHeader(!updateHeader);
                }}
              >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#collapseOneEducationRecord" + i}
                  aria-expanded="false"
                  aria-controls={"collapseOneEducationRecord" + i}
                >
                  <div
                    className="r-form-history"
                    style={{ marginBottom: "0px", width: "100%" }}
                  >
                    <h6>
                      {e.schoolName}, {e.degree} {formatDate(e.startDate)} -{" "}
                      {e.isStillStudying ? "present" : formatDate(e.endDate)}
                    </h6>
                    <p className="m-0">
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
                    </p>
                  </div>
                </button>
              </h2>

              <div
                id={"collapseOneEducationRecord" + i}
                className="accordion-collapse collapse"
                aria-labelledby={"headingEducationHistory" + i}
                data-bs-parent={`#educationHistoryParent${i}`}
              >
                <div className="accordion-body">
                  <WebsitesInput data={e} setData={setData} index={i} />
                </div>
              </div>
            </div>
          ))}
          <form className="row" onSubmit={appendNewRecord}>
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
                />
              </div>
            </div>
            <div className="col col-12">
              <div className="accordion add-employ" id="accordionadd1">
                <div className="accordion-item p-0">
                  <h2 className="accordion-header" id="headingsix">
                    <button
                      className="accordion-button collapsed"
                      type="submit"
                    >
                      Add Education
                    </button>
                  </h2>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
interface InputProps {
  data: EducationHistory;
  setData: React.Dispatch<React.SetStateAction<Data>>;
  index: number;
}
export function WebsitesInput({ data, setData, index }: InputProps) {
  const [rerenderComponent, setRerenderComponent] = useState<boolean>(false);
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setData((prev: any) => {
      prev.educationHistory[index][e.target.name] = e.target.value;
      return prev;
    });
    setRerenderComponent(!rerenderComponent);
  }
  return (
    <div className="row">
      <div className="col col-12 col-md-6">
        <div className="r-form-input">
          <label className="form-label">School</label>
          <input
            type="text"
            className="form-control"
            placeholder="Greenwood High International School"
            value={data.schoolName}
            onChange={onChange}
            name="schoolName"
            required
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
            value={data.degree}
            onChange={onChange}
            name="degree"
            required
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
            value={data.startDate}
            onChange={onChange}
            name="startDate"
            max={new Date().toJSON().slice(0, 10)}
            required
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
            value={data.endDate}
            onChange={onChange}
            name="endDate"
            disabled={data.isStillStudying}
            max={new Date().toJSON().slice(0, 10)}
            required
          />
        </div>
      </div>
      <div className="col col-12">
        <div className="r-form-input d-flex align-items-center">
          <input
            type="checkbox"
            className="form-check-input"
            id="Checkwork"
            checked={data.isStillStudying}
            onChange={() => {
              setData((prev) => {
                prev.educationHistory[index].isStillStudying =
                  !data.isStillStudying;
                return prev;
              });
              setRerenderComponent(!rerenderComponent);
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
            value={data.location}
            onChange={onChange}
            name="location"
            required
          />
        </div>
      </div>
    </div>
  );
}
