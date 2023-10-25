import React from "react";
interface Props {
  data: string;
}
export default function Hobbies({ data }: Props) {
  return (
    <div className="preview-contact">
      <h6 className="preview-contact-title preview-title">Hobbies</h6>
      <p className="preview-discription" style={{ textAlign: "justify" }}>
        {data}
      </p>
    </div>
  );
}
