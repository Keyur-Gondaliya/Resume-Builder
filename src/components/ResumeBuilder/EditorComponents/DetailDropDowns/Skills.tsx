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
  function appendNewRecord(e: React.FormEvent) {
    e.preventDefault();
    setData((prev) => ({
      ...prev,
      skills: [...prev.skills, skill],
    }));
    setSkill({
      name: "",
    });
  }
  const [updateHeader, setUpdateHeader] = useState<boolean>(false);

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
              <div key={e.name + i} id={`skillListParent${i}`}>
                <h2
                  className="accordion-header"
                  id={"headingSkillsList" + i}
                  style={{ marginBottom: "10px" }}
                  onClick={() => {
                    setUpdateHeader(!updateHeader);
                  }}
                >
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#collapseOneSkill" + i}
                    aria-expanded="false"
                    aria-controls={"collapseOneSkill" + i}
                  >
                    <div
                      className="r-form-history-skill"
                      style={{ width: "fit-content", margin: "5px" }}
                    >
                      <div
                        style={{ fontSize: "1rem", marginInlineEnd: "12px" }}
                      >
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
                      </div>
                    </div>
                  </button>
                </h2>

                <div
                  id={"collapseOneSkill" + i}
                  className="accordion-collapse collapse"
                  aria-labelledby={"headingSkillsList" + i}
                  data-bs-parent={`#skillListParent${i}`}
                >
                  <div className="accordion-body">
                    <SkillsInput data={e} setData={setData} index={i} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <form className="row" onSubmit={appendNewRecord}>
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
                  required
                />
              </div>
            </div>

            <div className="col col-12">
              <div className="accordion add-employ" id="accordionadd3">
                <div className="accordion-item p-0">
                  <h2 className="accordion-header" id="headingten">
                    <button
                      className="accordion-button collapsed"
                      type="submit"
                    >
                      Add Skill
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
  data: Skill;
  setData: React.Dispatch<React.SetStateAction<Data>>;
  index: number;
}
function SkillsInput({ data, setData, index }: InputProps) {
  const [rerenderComponent, setRerenderComponent] = useState<boolean>(false);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setData((prev: any) => {
      prev.skills[index].name = e.target.value;
      return prev;
    });
    setRerenderComponent(!rerenderComponent);
  }
  return (
    <div className="row">
      <div className="col col-12 col-md-6">
        <div className="r-form-input">
          <label className="form-label">Skill</label>
          <input
            type="text"
            className="form-control"
            placeholder="Team work"
            value={data.name}
            onChange={onChange}
            name="name"
          />
        </div>
      </div>
    </div>
  );
}
