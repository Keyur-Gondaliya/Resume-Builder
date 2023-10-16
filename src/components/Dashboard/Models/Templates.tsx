import React from "react";

export default function Templates() {
  return (
    <div
      className="modal fade template-modal"
      id="templateModal"
      tabIndex={-1}
      aria-labelledby="templateModal"
      aria-hidden="true"
    >
      <div className="modal-dialog template-modal-dialog">
        <div className="modal-content template-modal-content">
          <div className="modal-header template-modal-header">
            <h5 className="modal-title template-modal-title" id="templateModal">
              Change Template
            </h5>
            <a href="#" data-bs-dismiss="modal">
              Done
            </a>
          </div>
          <div className="modal-body template-modal-body">
            <div className="row">
              <div className="col col-12 col-md-6 col-lg-4 col-xl-4">
                <div className="template-modal-img">
                  <input
                    className="form-check-input d-none"
                    type="radio"
                    name="flexRadioDefault"
                    id="Radiotemplate"
                  />
                  <label className="form-check-label" htmlFor="Radiotemplate">
                    <img
                      src="assets/image/template_1.png"
                      alt="Resume_Template"
                      className="img-fluid"
                    />
                  </label>
                </div>
              </div>
              <div className="col col-12 col-md-6 col-lg-4 col-xl-4">
                <div className="template-modal-img">
                  <input
                    className="form-check-input d-none"
                    type="radio"
                    name="flexRadioDefault"
                    id="Radiotemplate1"
                  />
                  <label className="form-check-label" htmlFor="Radiotemplate1">
                    <img
                      src="assets/image/template_2.png"
                      alt="Resume_Template"
                      className="img-fluid"
                    />
                  </label>
                </div>
              </div>
              <div className="col col-12 col-md-6 col-lg-4 col-xl-4">
                <div className="template-modal-img">
                  <input
                    className="form-check-input d-none"
                    type="radio"
                    name="flexRadioDefault"
                    id="Radiotemplate3"
                  />
                  <label className="form-check-label" htmlFor="Radiotemplate3">
                    <img
                      src="assets/image/template_3.png"
                      alt="Resume_Template"
                      className="img-fluid"
                    />
                  </label>
                </div>
              </div>
              <div className="col col-12 col-md-6 col-lg-4 col-xl-4">
                <div className="template-modal-img">
                  <input
                    className="form-check-input d-none"
                    type="radio"
                    name="flexRadioDefault"
                    id="Radiotemplate4"
                  />
                  <label className="form-check-label" htmlFor="Radiotemplate4">
                    <img
                      src="assets/image/template_4.png"
                      alt="Resume_Template"
                      className="img-fluid"
                    />
                  </label>
                </div>
              </div>
              <div className="col col-12 col-md-6 col-lg-4 col-xl-4">
                <div className="template-modal-img">
                  <input
                    className="form-check-input d-none"
                    type="radio"
                    name="flexRadioDefault"
                    id="Radiotemplate5"
                  />
                  <label className="form-check-label" htmlFor="Radiotemplate5">
                    <img
                      src="assets/image/template_5.png"
                      alt="Resume_Template"
                      className="img-fluid"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
