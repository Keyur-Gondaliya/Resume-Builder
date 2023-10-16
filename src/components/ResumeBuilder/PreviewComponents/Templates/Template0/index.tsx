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

export default function Template0() {
  return (
    <div className="r-form-preview">
      <div className="preview-profile">
        <Image />
        <div className="preview-profile-body">
          <Websites />
          <h6 className="preview-main-title">
            Dan <br /> erhard olsson
          </h6>
          <PersonalInfo />
          <ProfessionalSummery />
          <Hobbies />
          <Extra />
        </div>
      </div>
      <div className="preview-work-details">
        <div className="preview-work-expeience">
          <WorkExperince />
          <Skills />
          <Referances />
          <ExtraRight />
        </div>
      </div>
    </div>
  );
}
