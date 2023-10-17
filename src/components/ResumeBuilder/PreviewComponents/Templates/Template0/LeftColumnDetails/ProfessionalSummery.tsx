import React from "react";
interface Props {
  data: string;
}
export default function ProfessionalSummery({ data }: Props) {
  return (
    <div className="preview-contact">
      <h6 className="preview-contact-title preview-title">About me</h6>
      <p className="preview-discription">{data}</p>
    </div>
  );
}
