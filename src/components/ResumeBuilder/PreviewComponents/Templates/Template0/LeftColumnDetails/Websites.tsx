import { Website } from "@/components/ResumeBuilder/general";
import React from "react";
interface Props {
  data: Website[];
}
export default function Websites({ data }: Props) {
  return (
    <ul className="preview-social-list">
      <li className="preview-social-item">
        <a href="#" className="preview-social-link">
          <img src="assets/image/instagram.png" alt="" className="img-fluid" />
        </a>
      </li>
      <li className="preview-social-item">
        <a href="#" className="preview-social-link">
          <img src="assets/image/fb icon.png" alt="" className="img-fluid" />
        </a>
      </li>
      <li className="preview-social-item">
        <a href="#" className="preview-social-link">
          <img src="assets/image/linkedin.png" alt="" className="img-fluid" />
        </a>
      </li>
    </ul>
  );
}
