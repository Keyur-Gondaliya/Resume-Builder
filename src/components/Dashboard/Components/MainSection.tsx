import React from "react";
import CreatedCard from "./CreatedCard";

export default function MainSection() {
  return (
    <section className="dashboard-section">
      <div className="container">
        <div className="dashboard-content">
          <div className="dashboard-header">
            <h2 className="dashboard-header-title">My Templates</h2>
            <a
              href="#"
              className="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#templateModal"
            >
              + Create New
            </a>
          </div>
          <div className="row">
            <CreatedCard url="assets/image/dashboard_cv.png" isEven={false} />
            <CreatedCard url="assets/image/dashboard_cv_1.png" isEven={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
