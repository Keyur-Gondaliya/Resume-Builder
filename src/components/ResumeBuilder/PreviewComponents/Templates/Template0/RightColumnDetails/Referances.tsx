import React from "react";
import { Reference } from "@/components/ResumeBuilder/general";

interface Props {
  data: Reference;
}
export default function Referances({ data }: Props) {
  return (
    <div className="preview-references">
      <h6 className="work-main-title">REFERENCE</h6>
      <div className="preview-references-list">
        <div className="preview-references-points">
          <p className="work-subtitle preview-references-title">{data.name}</p>
          <p className="work-discription">{data.company}</p>
        </div>
        <div className="preview-references-points">
          <p className="work-discription">{data.email}</p>
          <p className="work-discription">{data.phone}</p>
        </div>
      </div>
    </div>
  );
}
