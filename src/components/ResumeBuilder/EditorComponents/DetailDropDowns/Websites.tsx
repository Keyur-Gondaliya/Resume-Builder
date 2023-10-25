import React, { useState } from "react";
import { Data, Website } from "../../general";
interface Props {
  data: Website[];
  setData: React.Dispatch<React.SetStateAction<Data>>;
}
export default function Websites({ data, setData }: Props) {
  const [website, setWebsite] = useState<Website>({
    link: "",
  });
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setWebsite((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function appendNewRecord(e: React.FormEvent) {
    e.preventDefault();
    setData((prev) => ({
      ...prev,
      websites: [...prev.websites, website],
    }));
    setWebsite({
      link: "",
    });
  }
  const [updateHeader, setUpdateHeader] = useState<boolean>(false);
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingseven">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseseven"
          aria-expanded="false"
          aria-controls="collapseseven"
        >
          <img src="assets/image/global.png" alt="" className="img-fluid" />
          Website and Social Links
        </button>
      </h2>

      <div
        id="collapseseven"
        className="accordion-collapse collapse"
        aria-labelledby="headingseven"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          {data.map((e, i) => (
            <div key={e.link + i} id={`websiteListParent${i}`}>
              <h2
                className="accordion-header"
                id={"headingWebsiteList" + i}
                style={{ marginBottom: "10px" }}
                onClick={() => {
                  setUpdateHeader(!updateHeader);
                }}
              >
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={"#collapseOneWebsite" + i}
                  aria-expanded="false"
                  aria-controls={"collapseOneWebsite" + i}
                >
                  <div
                    className="r-form-history"
                    style={{ marginBottom: "0px", width: "100%" }}
                  >
                    <h6 style={{ width: "95%" }}>- {e.link}</h6>
                    <p className="m-0">
                      <a
                        className="text-decoration-none me-3 cp"
                        onClick={() => {
                          setData((prev) => ({
                            ...prev,
                            websites: data.filter((e1, i1) => i1 !== i),
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
                id={"collapseOneWebsite" + i}
                className="accordion-collapse collapse"
                aria-labelledby={"headingWebsiteList" + i}
                data-bs-parent={`#websiteListParent${i}`}
              >
                <div className="accordion-body">
                  <WebsitesInput data={e} setData={setData} index={i} />
                </div>
              </div>
            </div>
          ))}

          <form className="row" onSubmit={appendNewRecord}>
            <div className="col col-12 col-md-6">
              <div className="r-form-input right-slide-input">
                <label className="form-label">Link</label>
                <input
                  type="url"
                  className="form-control"
                  placeholder="https://www.google.com/"
                  value={website.link}
                  onChange={onChange}
                  name="link"
                  required
                />
              </div>
            </div>
            <div className="col col-12">
              <div className="accordion add-employ">
                <div className="accordion-item p-0">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="submit"
                    >
                      Add Links
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
  data: Website;
  setData: React.Dispatch<React.SetStateAction<Data>>;
  index: number;
}
export function WebsitesInput({ data, setData, index }: InputProps) {
  const [rerenderComponent, setRerenderComponent] = useState<boolean>(false);
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setData((prev: any) => {
      prev.websites[index].link = e.target.value;
      return prev;
    });
    setRerenderComponent(!rerenderComponent);
  }
  return (
    <div className="row">
      <div className="col col-12 col-md-6">
        <div className="r-form-input right-slide-input">
          <label className="form-label">Link</label>
          <input
            type="url"
            className="form-control"
            placeholder="https://www.google.com/"
            value={data.link}
            onChange={onChange}
            name="link"
            required
          />
        </div>
      </div>
    </div>
  );
}
