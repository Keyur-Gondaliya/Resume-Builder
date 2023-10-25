import React, { useState } from "react";
import { Data, PersonalInfo } from "../../general";
import axiosInstance from "@/api/axiosInstance";
import { useMutation } from "react-query";
interface Props {
  data: PersonalInfo;
  setData: React.Dispatch<React.SetStateAction<Data>>;
}
export default function PersonalInfo({ data, setData }: Props) {
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setData((prev) => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [e.target.name]: e.target.value },
    }));
  }
  const [image, setImage] = useState();
  const [error, setError] = useState("");
  const uploadImage = async (selectedImage: any) => {
    if (selectedImage.size <= 2 * 1024 * 1024) {
      const allowedExtensions = ["jpg", "jpeg", "png"];
      const extension = selectedImage.name.split(".").pop().toLowerCase();
      if (allowedExtensions.includes(extension)) {
      } else {
        setError("Invalid file format. Supported formats: jpg, jpeg, png");
      }
    } else {
      setError("File size should be less than 2MB");
    }
    const formData = new FormData();
    formData.append("image", selectedImage);
    return axiosInstance.post("history/image", formData).then((e) => {
      setData((prev) => ({
        ...prev,
        personalInfo: { ...prev.personalInfo, image: e.data.data.url },
      }));
    });
  };
  const mutation = useMutation({
    mutationFn: uploadImage,
  });
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          <img src="assets/image/user-edit.png" alt="" className="img-fluid" />
          Personal Information
        </button>
      </h2>
      <div
        id="collapseTwo"
        className="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <div className="row">
            <div className="col col-12 col-md-6">
              <div className="r-form-input">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your First Name"
                  value={data.firstName}
                  onChange={onChange}
                  name="firstName"
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input right-slide-input">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Last Name"
                  value={data.lastName}
                  onChange={onChange}
                  name="lastName"
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input">
                <label className="form-label">Job Title</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Marketing Manager"
                  value={data.jobTitle}
                  onChange={onChange}
                  name="jobTitle"
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div
                className="r-form-input right-slide-input"
                style={{ display: "flex" }}
              >
                <label
                  className="form-label uload-title"
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src="assets/image/user.png"
                    alt=""
                    className="img-fluid upload-img"
                  />
                  <input
                    type="file"
                    className="d-none "
                    value={image}
                    onChange={(e: any) => {
                      setError("");
                      mutation.mutate(e.target.files[0]);
                    }}
                  />
                  Upload Photo
                  <div className="text-danger">{error}</div>
                </label>
                {data.image ? (
                  <div style={{ position: "relative", marginLeft: "10px" }}>
                    <img
                      src={data.image}
                      alt="ptofile"
                      width={60}
                      style={{ borderRadius: "5px" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        borderRadius: "20px",
                        backgroundColor: "black",
                        color: "white",
                        top: -10,
                        left: 40,
                        padding: "2px 10px",
                        opacity: 0.8,
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        setData((prev) => ({
                          ...prev,
                          personalInfo: { ...prev.personalInfo, image: "" },
                        }));
                      }}
                    >
                      X
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="col col-12 col-md-6">
              <div className="r-form-input">
                <label className="form-label">Mobile no</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="+447975777666"
                  value={data.mobileNo}
                  onChange={onChange}
                  name="mobileNo"
                />
              </div>
            </div>
            <div className="col col-12 col-md-6">
              <div className="r-form-input right-slide-input">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="example@gmail.com"
                  value={data.email}
                  onChange={onChange}
                  name="email"
                />
              </div>
            </div>
            <div className="col col-12">
              <div className="r-form-input w-100">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter a location"
                  value={data.address}
                  onChange={onChange}
                  name="address"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
