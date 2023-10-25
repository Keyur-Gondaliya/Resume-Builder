import {
  EducationHistory,
  formatDate,
} from "@/components/ResumeBuilder/general";
import React from "react";
interface Props {
  data: EducationHistory[];
}
export default function Education({ data }: Props) {
  return (
    <div className="preview-work-list">
      <h6 className="work-main-title">Education</h6>
      {data.map((e, i) => (
        <div className="preview-work-points" key={i}>
          <p className="work-title">
            {e.schoolName}, {e.location}
          </p>
          <p className="work-subtitle">{e.degree}</p>
          <p className="work-date">
            {formatDate(e.startDate).slice(3)} -{" "}
            {e.isStillStudying ? "Present" : formatDate(e.endDate).slice(3)}
          </p>
        </div>
      ))}
    </div>
  );
}
