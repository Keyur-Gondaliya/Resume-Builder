import {
  EducationHistory,
  Project,
  formatDate,
} from "@/components/ResumeBuilder/general";
import React from "react";
interface Props {
  data: Project[];
}
export default function Projects({ data }: Props) {
  return (
    <div className="preview-work-list">
      <h6 className="work-main-title">Projects</h6>
      {data.map((e, i) => (
        <div className="preview-work-points" key={i}>
          <p className="work-title">
            {e.name} - <span className="work-subtitle">{e.role}</span>
          </p>
          <p className="work-date">{e.description}</p>
        </div>
      ))}
    </div>
  );
}
