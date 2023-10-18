import {
  EmploymentHistoryList,
  formatDate,
} from "@/components/ResumeBuilder/general";
import React from "react";
interface Props {
  data: EmploymentHistoryList[];
}
export default function WorkExperince({ data }: Props) {
  return (
    <div className="preview-work-list">
      <h6 className="work-main-title">work Experience</h6>
      {data.map((e, i) => (
        <div className="preview-work-points" key={i}>
          <p className="work-title">
            {e.companyName}, {e.location}
          </p>
          <p className="work-subtitle">{e.jobTitle}</p>
          <p className="work-date">
            {formatDate(e.startDate).slice(3)} -{" "}
            {e.isStillWorking ? "Present" : formatDate(e.endDate).slice(3)}
          </p>
          <p className="work-discription">{e.description}</p>
        </div>
      ))}
    </div>
  );
}
