import React from "react";
import { Data } from "../../general";
interface Props {
  data: string;
  setData: React.Dispatch<React.SetStateAction<Data>>;
}
export default function DrivingLicense({ data, setData }: Props) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingthirteen">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsethirteen"
          aria-expanded="false"
          aria-controls="collapsethirteen"
        >
          <img src="assets/image/car.png" alt="" className="img-fluid" />
          Driving License
        </button>
      </h2>
      <div
        id="collapsethirteen"
        className="accordion-collapse collapse"
        aria-labelledby="headingthirteen"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <div className="row">
            <div className="col col-12 col-md-6">
              <div className="r-form-input right-slide-input">
                <label className="form-label">Driving License Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Driving License Number"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
