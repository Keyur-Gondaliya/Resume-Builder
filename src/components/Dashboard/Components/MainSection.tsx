import React, { useState } from "react";
import CreatedCard from "./CreatedCard";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import axiosInstance from "@/api/axiosInstance";
import { useQuery } from "react-query";

export default function MainSection() {
  const router = useRouter();
  const getHistory = async () => {
    return (await axiosInstance.get("history")).data;
  };
  const { isLoading, data } = useQuery(["history"], getHistory);

  if (isLoading) return <>Loading...</>;
  return (
    <section className="dashboard-section">
      <div className="container">
        <div className="dashboard-content">
          <div className="dashboard-header">
            <h2 className="dashboard-header-title">My Templates</h2>
            <a
              href="#"
              className="btn btn-success"
              data-bs-toggle="modal"
              data-bs-target="#templateModal"
            >
              + Create New
            </a>
          </div>
          <div className="row">
            {data.map((e: any, i: number) => (
              <CreatedCard
                url="assets/image/dashboard_cv.png"
                isEven={i % 2 !== 0}
                key={i}
              />
            ))}
            {/* <CreatedCard url="assets/image/dashboard_cv_1.png" isEven={true} /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
