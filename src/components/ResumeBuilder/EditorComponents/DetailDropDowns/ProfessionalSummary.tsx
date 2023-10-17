import React from "react";
import { Data } from "../../general";
interface Props {
  data: string;
  setData: React.Dispatch<React.SetStateAction<Data>>;
}
export default function ProfessionalSummary({ data, setData }: Props) {
  function onChange(e: any) {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingfiftin">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsefiftin"
          aria-expanded="true"
          aria-controls="collapsefiftin"
        >
          <img src="assets/image/summary.png" alt="" className="img-fluid" />
          Professional Summary
        </button>
      </h2>
      <div
        id="collapsefiftin"
        className="accordion-collapse collapse"
        aria-labelledby="headingfiftin"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <p className="r-form-discription">
            Write 2-4 short & energetic sentences to interest the reader!
            Mention your role, experience & most importantly - your biggest
            achievements, best qualities and skills.
          </p>
          <div className="row">
            <div className="col col-12">
              <div className="r-form-input w-100">
                <div id="editor1">
                  <div className="r-form-input right-slide-input w-100">
                    {/* <label className="form-label">Add your Hobbies</label> */}
                    <textarea
                      className="form-control"
                      cols={30}
                      rows={5}
                      placeholder="Things you like to do (ex- Photography, Acting, Singing)"
                      value={data}
                      onChange={onChange}
                      name="professionalSummary"
                    ></textarea>
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
