import React from "react";
import Header from "./Header";
import ResumeFormatting from "./DetailDropDowns/ResumeFormatting";
import PersonalInfo from "./DetailDropDowns/PersonalInfo";
import ProfessionalSummary from "./DetailDropDowns/ProfessionalSummary";
import EmploymentHistory from "./DetailDropDowns/EmploymentHistory";
import Education from "./DetailDropDowns/Education";
import Websites from "./DetailDropDowns/Websites";
import Skills from "./DetailDropDowns/Skills";
import Reference from "./DetailDropDowns/Reference";
import Hobbies from "./DetailDropDowns/Hobbies";
import DrivingLicense from "./DetailDropDowns/DrivingLicense";
import AddExtra from "./DetailDropDowns/AddExtra";
import { Data } from "../general";
interface Props {
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data>>;
}
export default function EditorComponents({ data, setData }: Props) {
  return (
    <>
      <Header
        title={data.header.title}
        score={data.header.score}
        setData={setData}
      />
      <div className="accordion" id="accordionExample">
        <ResumeFormatting data={data.resumeFormatting} setData={setData} />
        <PersonalInfo data={data.personalInfo} setData={setData} />
        <ProfessionalSummary
          data={data.professionalSummary}
          setData={setData}
        />
        <EmploymentHistory data={data.employmentHistory} setData={setData} />
        <Education data={data.educationHistory} setData={setData} />
        <Websites data={data.websites} setData={setData} />
        <Skills data={data.skills} setData={setData} />
        <Hobbies data={data.hobbies} setData={setData} />
        <Reference data={data.referance} setData={setData} />
        {/* <DrivingLicense /> */}
        {/* <AddExtra /> */}
      </div>
    </>
  );
}
