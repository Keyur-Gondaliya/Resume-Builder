export const ZodInputValidation = (error: any) => ({
  ErrorType: "Input Validation",
  ErrorData: error.issues.map((e: any) => ({
    field: e.path,
    message: e.message,
  })),
});
export const UserUnathorized = () => ({
  ErrorType: "Unauthorized Access",
  ErrorData: { message: "Invalid JWT token", code: 99 },
});
