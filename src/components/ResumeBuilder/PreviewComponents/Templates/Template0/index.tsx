import React from "react";
import Image from "./LeftColumnDetails/Image";
import Websites from "./LeftColumnDetails/Websites";
import PersonalInfo from "./LeftColumnDetails/PersonalInfo";
import ProfessionalSummery from "./LeftColumnDetails/ProfessionalSummery";
import Hobbies from "./LeftColumnDetails/Hobbies";
import Extra from "./LeftColumnDetails/Extra";
import WorkExperince from "./RightColumnDetails/WorkExperince";
import Skills from "./RightColumnDetails/Skills";
import Referances from "./RightColumnDetails/Referances";
import ExtraRight from "./RightColumnDetails/ExtraRight";
import { Data } from "@/components/ResumeBuilder/general";
interface Props {
  data: Data;
}
export default function Template0({ data }: Props) {
  return (
    <div className="r-form-preview">
      <div className="preview-profile">
        <Image />
        <div className="preview-profile-body">
          <Websites data={data.websites} />
          <h6 className="preview-main-title">
            {data.personalInfo.firstName} <br /> {data.personalInfo.lastName}
          </h6>
          <PersonalInfo data={data.personalInfo} />
          <ProfessionalSummery data={data.professionalSummary} />
          <Hobbies data={data.hobbies} />
          {/* <Extra /> */}
        </div>
      </div>
      <div className="preview-work-details">
        <div className="preview-work-expeience">
          <WorkExperince data={data.employmentHistory} />
          <Skills data={data.skills} />
          <Referances data={data.referance} />
          {/* <ExtraRight /> */}
        </div>
      </div>
    </div>
  );
}
