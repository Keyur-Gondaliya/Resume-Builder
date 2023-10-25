import EditorComponents from "@/components/ResumeBuilder/EditorComponents";
import Download from "@/components/ResumeBuilder/Models/Download";
import Actions from "@/components/ResumeBuilder/PreviewComponents/Actions";
import Template0 from "@/components/ResumeBuilder/PreviewComponents/Templates/Template0";
import { Data } from "@/components/ResumeBuilder/general";
import Header from "@/includes/Header";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

type Props = {};

function ResumeBuilder({}: Props) {
  const router = useRouter();

  const [data, setData] = useState<Data>({
    header: {
      title: "Untitle",
      score: 70,
    },
    resumeFormatting: {
      language: "English",
      bodyFont: "Aria",
      titleFont: "Arial",
      template: String(router.query.template),
    },
    personalInfo: {
      jobTitle: "",
      firstName: "",
      lastName: "",
      address: "",
      mobileNo: "",
      email: "",
      image: "",
    },
    professionalSummary: "",
    employmentHistory: [],
    educationHistory: [],
    websites: [],
    skills: [],
    hobbies: "",
    referance: {
      name: "",
      company: "",
      email: "",
      phone: "",
    },
    projects: [],
  });
  const ref = useRef<any>();
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <section className="r-form-section">
          <div className="r-form-content">
            <div className="row m-0">
              <div className="col col-12 col-md-12 col-lg-6 col-xl-7 p-0">
                <div className="r-form-box" data-scrollbar>
                  <EditorComponents data={data} setData={setData} />
                </div>
              </div>
              <div
                className="col col-12 col-md-12 col-lg-6 col-xl-5 vh-100"
                data-scrollbar
              >
                <div ref={ref}>
                  <Template0 data={data} />
                </div>

                <Actions html={ref?.current?.innerHTML} />
              </div>
            </div>
          </div>
        </section>
        {/* Models */}
        {/* <Download /> */}
      </QueryClientProvider>
    </>
  );
}

export default ResumeBuilder;
