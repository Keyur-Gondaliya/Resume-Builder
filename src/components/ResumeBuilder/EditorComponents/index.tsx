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

export default function EditorComponents() {
  return (
    <>
      <Header />
      <div className="accordion" id="accordionExample">
        <ResumeFormatting />
        <PersonalInfo />
        <ProfessionalSummary />
        <EmploymentHistory />
        <Education />
        <Websites />
        <Skills />
        <Hobbies />
        <Reference />
        <DrivingLicense />
        <AddExtra />
      </div>
    </>
  );
}
