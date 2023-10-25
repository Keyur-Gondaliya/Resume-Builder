import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ErrorMessage from "../../../includes/ErrorMessage";
import axiosInstance from "@/api/axiosInstance";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Spinner from "@/includes/Spinner";

const ForgotPasswordFormSchema = z.object({
  email: z.string().email(),
});

export default function ForgotPassword() {
  const [disable, setDisable] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ForgotPasswordFormSchema),
  });
  function submitHandler(data: object) {
    setDisable(true);
    axiosInstance
      .post("user/sendForgotPasswordLink", data)
      .then((response) => {
        if (response.status === 200) {
          toast.success("Check Your Mail Box.");
          router.push("/");
        }
      })
      .catch(() => {
        reset({ keepValues: true });
      })
      .finally(() => {
        setDisable(false);
      });
  }
  return (
    <div
      className="modal fade signup-modal"
      id="forgotPasswordModal"
      tabIndex={-1}
      aria-labelledby="signupModal"
      aria-hidden="true"
    >
      <div className="modal-dialog signup-modal-dialog">
        <form
          className="modal-content signup-modal-content"
          onSubmit={handleSubmit(submitHandler)}
        >
          <div className="modal-header signup-modal-header">
            <h5 className="modal-title" id="loginModal">
              Forgot Password
            </h5>
            <p className="signup-discription">
              Enter Your Email to Reset Password
            </p>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body signup-modal-body">
            <div className="signup-input">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                {...register("email")}
                required
                autoFocus
              />
              {errors.email && <ErrorMessage message={errors.email?.message} />}
            </div>

            <div className="signup-btn">
              <button
                type="submit"
                className="btn btn-success"
                disabled={disable}
              >
                {disable ? <Spinner /> : "Reset"}
              </button>
            </div>
          </div>
          <div className="modal-footer">
            <p>
              Don’t have an account ?
              <a
                data-bs-toggle="modal"
                data-bs-target="#signupModal"
                // className="text-decoration-none "
                data-bs-dismiss="modal"
                style={{ textDecorationLine: "underline", cursor: "pointer" }}
              >
                Signup
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
