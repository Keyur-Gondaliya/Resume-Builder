import EditorComponents from "@/components/ResumeBuilder/EditorComponents";
import Download from "@/components/ResumeBuilder/Models/Download";
import Actions from "@/components/ResumeBuilder/PreviewComponents/Actions";
import Template0 from "@/components/ResumeBuilder/PreviewComponents/Templates/Template0";
import Header from "@/includes/Header";
import React from "react";

type Props = {};

function ResumeBuilder({}: Props) {
  return (
    <>
      <Header />
      <section className="r-form-section">
        <div className="r-form-content">
          <div className="row m-0">
            <div className="col col-12 col-md-12 col-lg-6 col-xl-7 p-0">
              <div className="r-form-box" data-scrollbar>
                <EditorComponents />
              </div>
            </div>
            <div
              className="col col-12 col-md-12 col-lg-6 col-xl-5 vh-100"
              data-scrollbar
            >
              <Template0 />
              <Actions />
            </div>
          </div>
        </div>
      </section>
      {/* Models */}
      <Download />
    </>
  );
}

export default ResumeBuilder;
