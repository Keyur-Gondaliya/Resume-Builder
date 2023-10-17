import React, { Reference } from "react";
interface Props {
  data: Reference;
}
export default function Referances({ data }: Props) {
  return (
    <div className="preview-references">
      <h6 className="work-main-title">REFERENCES</h6>
      <div className="preview-references-list">
        <div className="preview-references-points">
          <p className="work-subtitle preview-references-title">
            lENA DANELSON
          </p>
          <p className="work-discription">Fresh and (All )</p>
          <p className="work-discription">lenadanelson2@gmail.com</p>
          <p className="work-discription">+45750001100</p>
        </div>
        <div className="preview-references-points">
          <p className="work-subtitle preview-references-title">
            MAGNUS LARSSON
          </p>
          <p className="work-discription">Energize (All )</p>
          <p className="work-discription">magnslarsson@gmail.com</p>
          <p className="work-discription">+45750001100</p>
        </div>
        <div className="preview-references-points">
          <p className="work-subtitle preview-references-title">
            MAGNUS LARSSON
          </p>
          <p className="work-discription">Energize (All )</p>
          <p className="work-discription">magnslarsson@gmail.com</p>
          <p className="work-discription">+45750001100</p>
        </div>
      </div>
    </div>
  );
}
