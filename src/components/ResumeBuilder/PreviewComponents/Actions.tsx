import axiosInstance from "@/api/axiosInstance";
import React from "react";
import { useMutation } from "react-query";
interface Props {
  html: any;
}
export default function Actions({ html }: Props) {
  const createPDF = async (html: string) => {
    return axiosInstance.post("history/pdf", { html, id: 789789 }).then((e) => {
      window.open(e.data.data, "_blank");
    });
  };
  const mutation = useMutation({
    mutationFn: createPDF,
  });
  console.log(html);

  return (
    <div
      style={{ display: "flex", justifyContent: "flex-end", width: "776px" }}
    >
      <div className="r-form-download" style={{ width: "fit-content" }}>
        <a
          className="btn btn-success"
          onClick={() => {
            mutation.mutate(html);
          }}
        >
          <img src="assets/image/download.png" alt="" className="img-fluid" />
          {mutation.isLoading ? "Generating" : "Download"}
        </a>
        {/* <div className="r-form-download-icon">
        <a href="#" data-bs-toggle="modal" data-bs-target="#templateModal">
          <img src="assets/image/category.png" alt="" className="img-fluid" />
        </a>
        <a href="#">
          <img
            src="assets/image/document-download.png"
            alt=""
            className="img-fluid"
          />
        </a>
        <a href="#">
          <img src="assets/image/maximize.png" alt="" className="img-fluid" />
        </a>
        <a href="#" data-bs-toggle="modal" data-bs-target="#cvsaveModal">
          <img src="assets/image/Close.png" alt="" className="img-fluid" />
        </a>
      </div> */}
      </div>
    </div>
  );
}
