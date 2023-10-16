import React from "react";

export default function Actions() {
  return (
    <div className="r-form-download">
      <a
        href="#"
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#paymentModal"
      >
        <img src="assets/image/download.png" alt="" className="img-fluid" />{" "}
        Download
      </a>
      <div className="r-form-download-icon">
        <a href="#" data-bs-toggle="modal" data-bs-target="#templateModal">
          <img src="assets/image/category.png" alt="" className="img-fluid" />
        </a>
        <a href="#">
          <img
            src="assets/image/document-download.png"
            alt=""
            className="img-fluid"
          />
        </a>
        <a href="#">
          <img src="assets/image/maximize.png" alt="" className="img-fluid" />
        </a>
        <a href="#" data-bs-toggle="modal" data-bs-target="#cvsaveModal">
          <img src="assets/image/Close.png" alt="" className="img-fluid" />
        </a>
      </div>
    </div>
  );
}
