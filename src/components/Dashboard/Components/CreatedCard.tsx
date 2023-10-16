import { useRouter } from "next/router";
import React from "react";
interface Props {
  url: string;
  isEven: boolean;
}
export default function CreatedCard({ url, isEven }: Props) {
  const router = useRouter();
  return (
    <div className="col col-12 col-md-12 col-lg-6 col-xl-6">
      <div
        className={`dashboard-cvtemplate ${
          isEven ? "justify-content-end" : ""
        }`}
      >
        <div className="dashboard-cvtemplate-img">
          <img src={url} alt="" className="img-fluid" />
        </div>
        <div className="dashboard-cvtemplate-editor">
          <h5 className="dashboard-cvtemplate-title">Work Resume</h5>
          <p className="dashboard-cvtemplate-date">
            Updated 11 Oct 2022, 22:34
          </p>
          <ul className="dashboard-cvtemplate-list">
            <li className="dashboard-cvtemplate-item">
              <a
                className="dashboard-cvtemplate-link"
                onClick={() => {
                  router.push("/resume-builder");
                }}
              >
                <img src="assets/image/edit.png" alt="" className="img-fluid" />
                Edit cv
              </a>
            </li>
            <li className="dashboard-cvtemplate-item">
              <a href="#" className="dashboard-cvtemplate-link">
                <img src="assets/image/pdf.png" alt="" className="img-fluid" />
                Download pdf
              </a>
            </li>
            <li className="dashboard-cvtemplate-item">
              <a href="#" className="dashboard-cvtemplate-link">
                <img
                  src="assets/image/delete.png"
                  alt=""
                  className="img-fluid"
                />
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
