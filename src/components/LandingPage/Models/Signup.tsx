import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import ErrorMessage from "../../../includes/ErrorMessage";

const SignupFormSchema = z
  .object({
    email: z.string().email(),
    password: z.string().refine((data) => data.length > 6, {
      message: "Password Must Be Atlist 6 Characters.",
    }),
    confirmPassword: z.string().refine((data) => data.length > 6, {
      message: "Confirm Password Must Be Atlist 6 Characters.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password And Confirm Password Are Not Same.",
    path: ["confirmPassword"],
  });
export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(SignupFormSchema),
  });
  function submitHandler(data: object) {
    console.log(data);
  }

  return (
    <div
      className="modal fade signup-modal"
      id="signupModal"
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
            <h5 className="modal-title" id="signupModal">
              Sign Up
            </h5>
            <p className="signup-discription">
              Register to enable <strong>FREE</strong> edit and downloads of the
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
            </div>
            <div className="signup-input">
              <label className="form-label">Confirm Password</label>
              <input
                type="Password"
                className="form-control"
                {...register("confirmPassword")}
                required
              />
              {errors.confirmPassword && (
                <ErrorMessage message={errors.confirmPassword?.message} />
              )}
            </div>
            <div className="signup-btn">
              <button type="submit" className="btn btn-success">
                Sign up
              </button>
            </div>
          </div>
          <div className="modal-footer">
            <p>
              Don’t have an account ?
              <a
                // className="text-decoration-none"
                style={{ textDecorationLine: "underline", cursor: "pointer" }}
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
                data-bs-dismiss="modal"
              >
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
