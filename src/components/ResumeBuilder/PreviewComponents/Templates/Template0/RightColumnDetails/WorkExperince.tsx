import { EmploymentHistoryList } from "@/components/ResumeBuilder/general";
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
            {e.startDate} - {e.isStillWorking ? "Present" : e.endDate}
          </p>
          <p className="work-discription">{e.description}</p>
        </div>
      ))}
    </div>
  );
}
