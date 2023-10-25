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
          <p
            className="work-subtitle"
            key={e.name + i}
            style={{
              borderRadius: "7px",
              backgroundColor: "rgba(33, 37, 41, 0.85)",
              color: "white",
              padding: "8px",
              marginInlineEnd: "3px",
            }}
          >
            {e.name}&nbsp;
          </p>
        ))}
      </div>
    </div>
  );
}
