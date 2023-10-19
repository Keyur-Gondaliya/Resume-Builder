import React from "react";
import { Data, ResumeFormatting } from "../../general";
interface Props {
  data: ResumeFormatting;
  setData: React.Dispatch<React.SetStateAction<Data>>;
}
export default function ResumeFormatting({ data, setData }: Props) {
  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setData((prev) => ({
      ...prev,
      resumeFormatting: {
        ...prev.resumeFormatting,
        [e.target.name]: e.target.value,
      },
    }));
  }
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <img src="assets/image/plus.png" alt="" className="img-fluid" />
          Resume Formatting
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <div className="row">
            <div className="col col-12 col-md-6">
              <div className="r-form-input">
                <label className="form-label">Template</label>
                <select
                  className="form-select form-control"
                  value={data.template}
                  onChange={onChange}
                  name="template"
                  disabled
                >
                  <option value="Template0">Template0</option>
                </select>
                {/* <input
                  type="email"
                  className="form-control"
                  placeholder="Choose best template"
                  value={data.template}
                  onChange={onChange}
                  name="template"
                /> */}
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input right-slide-input">
                <label className="form-label">Resume Laguage</label>
                <select
                  className="form-select form-control"
                  value={data.language}
                  onChange={onChange}
                  name="language"
                  disabled
                >
                  <option value="English" selected>
                    English
                  </option>
                  {/* <option>Swedish</option> */}
                </select>
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input">
                <label className="form-label">Title Font</label>
                <select
                  className="form-select form-control"
                  value={data.titleFont}
                  onChange={onChange}
                  name="titleFont"
                  disabled
                >
                  <option value="Arial">Arial</option>
                  <option value="Avenir Next">Avenir Next</option>
                  <option value="Calibri">Calibri</option>
                  <option value="Cambria">Cambria</option>
                </select>
                {/* <input
                  type="text"
                  className="form-control"
                  placeholder="Lato"
                  value={data.titleFont}
                  onChange={onChange}
                  name="titleFont"
                /> */}
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input right-slide-input">
                <label className="form-label">Body Font</label>
                <select
                  className="form-select form-control"
                  value={data.bodyFont}
                  onChange={onChange}
                  name="bodyFont"
                  disabled
                >
                  <option value="Arial">Arial</option>
                  <option value="Avenir Next">Avenir Next</option>
                  <option value="Calibri">Calibri</option>
                  <option value="Cambria">Cambria</option>
                </select>
                {/* <input
                  type="text"
                  className="form-control"
                  placeholder="Lato"
                  value={data.bodyFont}
                  onChange={onChange}
                  name="bodyFont"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
