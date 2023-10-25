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
import Education from "./RightColumnDetails/Education";
import Projects from "./RightColumnDetails/Projects";
interface Props {
  data: Data;
}
export default function Template0({ data }: Props) {
  return (
    <div className="r-form-preview">
      <div className="preview-profile">
        {data.personalInfo.image ? (
          <Image data={data.personalInfo.image} />
        ) : null}
        <div className="preview-profile-body">
          {data.websites.length ? <Websites data={data.websites} /> : null}
          <h6 className="preview-main-title">
            {data.personalInfo.firstName} {data.personalInfo.lastName}
            <div style={{ textAlign: "right" }}>
              {data.personalInfo.jobTitle
                ? `-${data.personalInfo.jobTitle}`
                : null}
            </div>
          </h6>
          <PersonalInfo data={data.personalInfo} />
          {data.professionalSummary ? (
            <ProfessionalSummery data={data.professionalSummary} />
          ) : null}
          {data.hobbies ? <Hobbies data={data.hobbies} /> : null}
          {/* <Extra /> */}
        </div>
      </div>
      <div className="preview-work-details">
        <div className="preview-work-expeience">
          {data.employmentHistory.length ? (
            <WorkExperince data={data.employmentHistory} />
          ) : null}
          {data.projects.length ? <Projects data={data.projects} /> : null}
          {data.educationHistory.length ? (
            <Education data={data.educationHistory} />
          ) : null}
          {data.skills.length ? <Skills data={data.skills} /> : null}
          {data.referance.name ? <Referances data={data.referance} /> : null}
          {/* <ExtraRight /> */}
        </div>
      </div>
    </div>
  );
}
