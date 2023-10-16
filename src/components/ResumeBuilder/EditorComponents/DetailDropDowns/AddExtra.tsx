import React from "react";

export default function AddExtra() {
  return (
    <div className="accordion-item pb-0">
      <h2 className="accordion-header" id="headingfourteen">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsefourteen"
          aria-expanded="false"
          aria-controls="collapsefourteen"
        >
          <img src="assets/image/flash.png" alt="" className="img-fluid" />
          Add Extra
        </button>
      </h2>
      <div
        id="collapsefourteen"
        className="accordion-collapse collapse"
        aria-labelledby="headingfourteen"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <div className="accordion r-form-add-extra" id="accordionextra">
            <div className="row">
              <div className="col col-12 col-md-6">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingextra">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseextra"
                      aria-expanded="false"
                      aria-controls="collapseextra"
                    >
                      <img
                        src="assets/image/hobbies.png"
                        alt=""
                        className="img-fluid"
                      />
                      Hobbies
                    </button>
                  </h2>
                  <div
                    id="collapseextra"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingextra"
                    data-bs-parent="#accordionextra"
                  >
                    <div className="accordion-body">add</div>
                  </div>
                </div>
              </div>
              <div className="col col-12 col-md-6">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingextra1">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseextra1"
                      aria-expanded="false"
                      aria-controls="collapseextra1"
                    >
                      <img
                        src="assets/image/link.png"
                        alt=""
                        className="img-fluid"
                      />
                      Refrences
                    </button>
                  </h2>
                  <div
                    id="collapseextra1"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingextra1"
                    data-bs-parent="#accordionextra"
                  >
                    <div className="accordion-body">add</div>
                  </div>
                </div>
              </div>
              <div className="col col-12 col-md-6">
                <div className="accordion-item mb-0">
                  <h2 className="accordion-header" id="headingextra2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseextra2"
                      aria-expanded="false"
                      aria-controls="collapseextra2"
                    >
                      <img
                        src="assets/image/car.png"
                        alt=""
                        className="img-fluid"
                      />
                      Driving License
                    </button>
                  </h2>
                  <div
                    id="collapseextra2"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingextra2"
                    data-bs-parent="#accordionextra"
                  >
                    <div className="accordion-body">add</div>
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
