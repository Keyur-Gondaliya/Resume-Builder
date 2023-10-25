import React, { useState } from "react";
import { Data, Project, formatDate } from "../../general";
interface Props {
  data: Project[];
  setData: React.Dispatch<React.SetStateAction<Data>>;
}
export default function ProjectList({ data, setData }: Props) {
  const [project, setProject] = useState<Project>({
    role: "",
    name: "",
    description: "",
  });
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setProject((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function appendNewRecord(e: React.FormEvent) {
    e.preventDefault();
    setData((prev) => ({
      ...prev,
      projects: [...prev.projects, project],
    }));
    setProject({
      role: "",
      name: "",
      description: "",
    });
  }
  const [updateHeader, setUpdateHeader] = useState<boolean>(false);
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingproject">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseProject"
          aria-expanded="false"
          aria-controls="collapseProject"
        >
          <img
            src="assets/image/project.png"
            alt=""
            className="img-fluid"
            width={20}
          />
          Projects
        </button>
      </h2>
      <div
        id="collapseProject"
        className="accordion-collapse collapse"
        aria-labelledby="headingproject"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          {data.map((e, i) => (
            <div key={e.name + i} id={`projectHistoryParent${i}`}>
              <h2
                className="accordion-header"
                id={"headingprojectHistory" + i}
                style={{ marginBottom: "10px" }}
                onClick={() => {
                  setUpdateHeader(!updateHeader);
                }}
              >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#collapseOneprojectRecord" + i}
                  aria-expanded="false"
                  aria-controls={"collapseOneprojectRecord" + i}
                >
                  <div
                    className="r-form-history"
                    style={{ marginBottom: "0px", width: "100%" }}
                  >
                    <h6>
                      {e.name} - {e.role}
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
                              projects: data.filter((e1, i1) => i1 !== i),
                            }));
                          }}
                        />
                      </a>
                    </p>
                  </div>
                </button>
              </h2>

              <div
                id={"collapseOneprojectRecord" + i}
                className="accordion-collapse collapse"
                aria-labelledby={"headingprojectHistory" + i}
                data-bs-parent={`#projectHistoryParent${i}`}
              >
                <div className="accordion-body">
                  <ProjectHistoryInput data={e} setData={setData} index={i} />
                </div>
              </div>
            </div>
          ))}

          <form className="row" onSubmit={appendNewRecord}>
            <div className="col col-12 col-md-6">
              <div className="r-form-input">
                <label className="form-label">Job Role</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Coordinator"
                  value={project.role}
                  onChange={onChange}
                  name="role"
                  required
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input right-slide-input">
                <label className="form-label">Project name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Uber"
                  value={project.name}
                  onChange={onChange}
                  name="name"
                  required
                />
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
                  value={project.description}
                  onChange={(e) => {
                    setProject((prev) => ({
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
                      Add project
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
  data: Project;
  setData: React.Dispatch<React.SetStateAction<Data>>;
  index: number;
}
export function ProjectHistoryInput({ data, setData, index }: InputProps) {
  const [rerenderComponent, setRerenderComponent] = useState<boolean>(false);
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setData((prev: any) => {
      prev.projects[index][e.target.name] = e.target.value;
      return prev;
    });
    setRerenderComponent(!rerenderComponent);
  }
  return (
    <div className="row">
      <div className="col col-12 col-md-6">
        <div className="r-form-input">
          <label className="form-label">Job Role</label>
          <input
            type="text"
            className="form-control"
            placeholder="Coordinator"
            value={data.role}
            onChange={onChange}
            name="role"
            required
          />
        </div>
      </div>
      <div className="col col-12 col-md-6">
        <div className="r-form-input right-slide-input">
          <label className="form-label">Project name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Uber"
            value={data.name}
            onChange={onChange}
            name="name"
            required
          />
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
                prev.projects[index].description = e.target.value;
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
