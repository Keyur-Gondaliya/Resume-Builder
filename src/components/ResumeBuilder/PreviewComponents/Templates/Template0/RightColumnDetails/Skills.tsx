import { Skill } from "@/components/ResumeBuilder/general";
import React from "react";
interface Props {
  data: Skill[];
}
export default function Skills({ data }: Props) {
  return (
    <div className="preview-skills-list">
      <h6 className="work-main-title">skills</h6>
      <div className="preview-work-points preview-skills-points">
        {data.map((e, i) => (
          <p className="work-subtitle preview-skills-links" key={e.name + i}>
            {e.name}&nbsp;
          </p>
        ))}
      </div>
    </div>
  );
}
