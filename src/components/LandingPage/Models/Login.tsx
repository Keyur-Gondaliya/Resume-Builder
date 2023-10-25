import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ErrorMessage from "../../../includes/ErrorMessage";
import { useState } from "react";
import axiosInstance from "@/api/axiosInstance";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Spinner from "@/includes/Spinner";

const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().refine((data) => data.length > 5, {
    message: "Password Must Be Atlist 6 Characters.",
  }),
});

export default function Login() {
  const [disable, setDisable] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginFormSchema),
  });
  function submitHandler(data: object) {
    setDisable(true);
    axiosInstance
      .post("user/login", data)
      .then((response) => {
        if (response.status === 200) {
          toast.success("Check Your Mail Box.");
          sessionStorage.setItem(
            "RESUMEBUILDERLOGINTOKEN",
            response.data.token
          );
          // window.location.reload();
          router.push("/dashboard");
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
      id="loginModal"
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
              Login
            </h5>
            <p className="signup-discription">
              Log in to enable <strong>FREE</strong> edits and downloads of
              <br className="d-none d-md-block" />
              <strong>Everything.</strong>
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
            <div className="signup-input">
              <label className="form-label">Password</label>
              <input
                type="Password"
                className="form-control"
                {...register("password")}
                required
              />
              {errors.password && (
                <ErrorMessage message={errors.password?.message} />
              )}
              <div
                style={{
                  textDecorationLine: "underline",
                  textAlign: "right",
                  cursor: "pointer",
                }}
                data-bs-toggle="modal"
                data-bs-target="#forgotPasswordModal"
                // className="text-decoration-none "
                data-bs-dismiss="modal"
              >
                Forgot Password
              </div>
            </div>
            <div className="signup-btn">
              <button
                type="submit"
                className="btn btn-success"
                disabled={disable}
              >
                {disable ? <Spinner /> : "Login"}
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
