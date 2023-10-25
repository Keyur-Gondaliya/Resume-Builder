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
  function appendNewRecord(e: React.FormEvent) {
    e.preventDefault();
    setData((prev) => ({
      ...prev,
      employmentHistory: [...prev.employmentHistory, employment],
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
  }
  const [updateHeader, setUpdateHeader] = useState<boolean>(false);
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
            <div key={e.companyName + i} id={`employmentHistoryParent${i}`}>
              <h2
                className="accordion-header"
                id={"headingEmploymentHistory" + i}
                style={{ marginBottom: "10px" }}
                onClick={() => {
                  setUpdateHeader(!updateHeader);
                }}
              >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#collapseOneEmploymentRecord" + i}
                  aria-expanded="false"
                  aria-controls={"collapseOneEmploymentRecord" + i}
                >
                  <div
                    className="r-form-history"
                    style={{ marginBottom: "0px", width: "100%" }}
                  >
                    <h6>
                      {e.companyName} - {e.jobTitle}, {formatDate(e.startDate)}{" "}
                      - {e.isStillWorking ? "present" : formatDate(e.endDate)}
                    </h6>
                    <p className="m-0">
                      <a className="text-decoration-none me-3 cp">
                        <img
                          src="assets/image/trash.png"
                          alt=""
                          className="img-fluid"
                          onClick={() => {
                            setData((prev) => ({
                              ...prev,
                              employmentHistory: data.filter(
                                (e1, i1) => i1 !== i
                              ),
                            }));
                          }}
                        />
                      </a>
                    </p>
                  </div>
                </button>
              </h2>

              <div
                id={"collapseOneEmploymentRecord" + i}
                className="accordion-collapse collapse"
                aria-labelledby={"headingEmploymentHistory" + i}
                data-bs-parent={`#employmentHistoryParent${i}`}
              >
                <div className="accordion-body">
                  <EmploymentHistoryInput
                    data={e}
                    setData={setData}
                    index={i}
                  />
                </div>
              </div>
            </div>
          ))}

          <form className="row" onSubmit={appendNewRecord}>
            <div className="col col-12 col-md-6">
              <div className="r-form-input">
                <label className="form-label">Job Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Coordinator"
                  value={employment.jobTitle}
                  onChange={onChange}
                  name="jobTitle"
                  required
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input right-slide-input">
                <label className="form-label">Company name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Google India"
                  value={employment.companyName}
                  onChange={onChange}
                  name="companyName"
                  required
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
                    max={new Date().toJSON().slice(0, 10)}
                    required
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
                    max={new Date().toJSON().slice(0, 10)}
                    required
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
                  placeholder="Bangalore"
                  value={employment.location}
                  onChange={onChange}
                  name="location"
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
                      type="submit"
                    >
                      Add Employment
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
  data: EmploymentHistoryList;
  setData: React.Dispatch<React.SetStateAction<Data>>;
  index: number;
}
export function EmploymentHistoryInput({ data, setData, index }: InputProps) {
  const [rerenderComponent, setRerenderComponent] = useState<boolean>(false);
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setData((prev: any) => {
      prev.employmentHistory[index][e.target.name] = e.target.value;
      return prev;
    });
    setRerenderComponent(!rerenderComponent);
  }
  return (
    <div className="row">
      <div className="col col-12 col-md-6">
        <div className="r-form-input">
          <label className="form-label">Job Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Coordinator"
            value={data.jobTitle}
            onChange={onChange}
            name="jobTitle"
            required
          />
        </div>
      </div>
      <div className="col col-12 col-md-6">
        <div className="r-form-input right-slide-input">
          <label className="form-label">Company name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Google India"
            value={data.companyName}
            onChange={onChange}
            name="companyName"
            required
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
              value={data.startDate}
              onChange={onChange}
              name="startDate"
              max={new Date().toJSON().slice(0, 10)}
              required
            />
          </div>
          <div className="r-form-input">
            <label className="form-label">End Date</label>
            <input
              type="date"
              className="form-control"
              placeholder="Present"
              value={data.endDate}
              onChange={onChange}
              name="endDate"
              disabled={data.isStillWorking}
              max={new Date().toJSON().slice(0, 10)}
              required
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
            placeholder="Bangalore"
            value={data.location}
            onChange={onChange}
            name="location"
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
            checked={data.isStillWorking}
            onChange={() => {
              setData((prev) => {
                prev.employmentHistory[index].isStillWorking =
                  !data.isStillWorking;
                return prev;
              });
              setRerenderComponent(!rerenderComponent);
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
            value={data.description}
            onChange={(e) => {
              setData((prev) => {
                prev.employmentHistory[index].description = e.target.value;
                return prev;
              });
              setRerenderComponent(!rerenderComponent);
            }}
            name="description"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
