import React from "react";
import { Data } from "../../general";
interface Props {
  data: string;
  setData: React.Dispatch<React.SetStateAction<Data>>;
}
export default function Hobbies({ data, setData }: Props) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingeleven">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseeleven"
          aria-expanded="false"
          aria-controls="collapseeleven"
        >
          <img src="assets/image/hobbies.png" alt="" className="img-fluid" />
          Hobbies
        </button>
      </h2>
      <div
        id="collapseeleven"
        className="accordion-collapse collapse"
        aria-labelledby="headingeleven"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <div className="row">
            <div className="col col-12">
              <div className="r-form-input right-slide-input w-100">
                <label className="form-label">Add your Hobbies</label>
                <textarea
                  className="form-control"
                  cols={30}
                  rows={5}
                  placeholder="Things you like to do (ex- Photography, Acting, Singing)"
                  value={data}
                  onChange={(e) => {
                    setData((prev) => ({ ...prev, hobbies: e.target.value }));
                  }}
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
