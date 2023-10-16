import MainSection from "@/components/Dashboard/Components/MainSection";
import Templates from "@/components/Dashboard/Models/Templates";
import Header from "@/includes/Header";
import * as React from "react";

export interface IAppProps {}

export default function Dashboard(props: IAppProps) {
  return (
    <>
      <Header />
      <MainSection />
      {/* Models */}
      <Templates />
    </>
  );
}
