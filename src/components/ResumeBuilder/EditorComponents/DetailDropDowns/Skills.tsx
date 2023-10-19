import React, { useState } from "react";
import { Data, Skill } from "../../general";

interface Props {
  data: Skill[];
  setData: React.Dispatch<React.SetStateAction<Data>>;
}
export default function Skills({ data, setData }: Props) {
  const [skill, setSkill] = useState<Skill>({
    name: "",
  });
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSkill((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingnine">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsenine"
          aria-expanded="false"
          aria-controls="collapsenine"
        >
          <img src="assets/image/award.png" alt="" className="img-fluid" />
          Skills
        </button>
      </h2>
      <div
        id="collapsenine"
        className="accordion-collapse collapse"
        aria-labelledby="headingnine"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <div className="d-flex flex-wrap">
            {data.map((e, i) => (
              <div
                className="r-form-history-skill"
                style={{ width: "fit-content", margin: "5px" }}
              >
                <div style={{ fontSize: "1rem", marginInlineEnd: "12px" }}>
                  {e.name}
                </div>
                <div className="m-0">
                  <a
                    className="text-decoration-none me-1 cp"
                    onClick={() => {
                      setData((prev) => ({
                        ...prev,
                        skills: data.filter((e1, i1) => i1 !== i),
                      }));
                    }}
                  >
                    <img
                      src="assets/image/trash.png"
                      alt=""
                      className="img-fluid"
                      width={17}
                    />
                  </a>
                  <a className="text-decoration-none cp">
                    <img
                      src="assets/image/dwon_arrow.png"
                      alt=""
                      className="img-fluid"
                      width={17}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col col-12 col-md-6">
              <div className="r-form-input">
                <label className="form-label">Skill</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Team work"
                  value={skill.name}
                  onChange={onChange}
                  name="name"
                />
              </div>
            </div>
            {/* <div className="col col-12 col-md-6">
              <html ng-app="ranger">
                <body ng-controller="MainCtrl">
                  <label className="form-label">
                    Level - <span>Experienced</span>{" "}
                  </label>
                  <div className="mySlider">
                    <input
                      type="text"
                      id="rangeSlider"
                      range-slider=""
                      model-from="priceFrom"
                      model-to="priceTo"
                      range-options="rangeOptions"
                      value={skill.rating}
                      onChange={onChange}
                      name="rating"
                    />
                    <span className="r-form-skills-points"></span>
                  </div>
                </body>
              </html>
            </div> */}
            <div className="col col-12">
              <div className="accordion add-employ" id="accordionadd3">
                <div className="accordion-item p-0">
                  <h2 className="accordion-header" id="headingten">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      // data-bs-toggle="collapse"
                      // data-bs-target="#collapseten"
                      // aria-expanded="false"
                      // aria-controls="collapseten"
                      onClick={() => {
                        setData((prev) => ({
                          ...prev,
                          skills: [...prev.skills, skill],
                        }));
                        setSkill({
                          name: "",
                        });
                      }}
                    >
                      Add Skill
                    </button>
                  </h2>
                  {/* <div
                    id="collapseten"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingten"
                    data-bs-parent="#accordionadd3"
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
