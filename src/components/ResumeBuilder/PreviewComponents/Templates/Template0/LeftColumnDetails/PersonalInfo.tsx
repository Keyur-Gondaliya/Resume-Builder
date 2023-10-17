import { PersonalInfo } from "@/components/ResumeBuilder/general";
import React from "react";
interface Props {
  data: PersonalInfo;
}
export default function PersonalInfo({ data }: Props) {
  return (
    <div className="preview-contact">
      <h6 className="preview-contact-title preview-title">Contact</h6>
      <p className="preview-discription">+{data.mobileNo}</p>
      <p className="preview-discription">{data.email}</p>
      <p className="preview-discription">{data.address}</p>
    </div>
  );
}
