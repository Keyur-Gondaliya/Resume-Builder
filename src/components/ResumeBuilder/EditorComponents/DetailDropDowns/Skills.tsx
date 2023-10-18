import React, { useState } from "react";
import { Data, Skill } from "../../general";
interface Props {
  data: Skill[];
  setData: React.Dispatch<React.SetStateAction<Data>>;
}
export default function Skills({ data, setData }: Props) {
  const [skill, setSkill] = useState<Skill>({
    name: "",
    rating: 5,
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
            <div className="col col-12 col-md-6">
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
            </div>
            <div className="col col-12">
              <div className="accordion add-employ" id="accordionadd3">
                <div className="accordion-item p-0">
                  <h2 className="accordion-header" id="headingten">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseten"
                      aria-expanded="false"
                      aria-controls="collapseten"
                      onClick={() => {
                        setData((prev) => ({
                          ...prev,
                          skills: [...prev.skills, skill],
                        }));
                        setSkill({
                          name: "",
                          rating: 5,
                        });
                      }}
                    >
                      Add Skill
                    </button>
                  </h2>
                  <div
                    id="collapseten"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingten"
                    data-bs-parent="#accordionadd3"
                  >
                    <div className="accordion-body">hjvfvmvdhgvcfdgf</div>
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
