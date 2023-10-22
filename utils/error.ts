import { AppError } from "./errorModel";

export const ZodInputValidation = (error: any) => ({
  ErrorType: "Input Validation",
  ErrorData: error.issues.map((e: any) => ({
    field: e.path,
    message: e.message,
  })),
});
export const UserUnathorized = () => {
  var error = {
    ErrorType: "",
    ErrorData: { message: "Invalid JWT token", code: 99 },
  };

  return new AppError("Unauthorized Access", 403, error);
};
