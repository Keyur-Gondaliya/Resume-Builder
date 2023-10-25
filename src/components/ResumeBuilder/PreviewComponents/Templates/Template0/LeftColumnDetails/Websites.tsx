import { Website } from "@/components/ResumeBuilder/general";
import React from "react";
interface Props {
  data: Website[];
}
export default function Websites({ data }: Props) {
  function iconFilter(type: string) {
    type = type?.trim()?.toLocaleLowerCase();
    if (type.includes("instagram")) return "assets/image/instagram.png";
    if (type.includes("facebook")) return "assets/image/fb icon.png";
    if (type.includes("linkedin")) return "assets/image/linkedin.png";
    if (type.includes("twitter")) return "assets/image/twitter.svg";
    else return "assets/image/website.svg";
  }
  return (
    <ul className="preview-social-list">
      {data.map((e, i) => (
        <li className="preview-social-item" key={e.link + i}>
          <a href={e.link} className="preview-social-link" target="_blank">
            <img
              src={iconFilter(e.link)}
              alt=""
              className="img-fluid"
              width={20}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
