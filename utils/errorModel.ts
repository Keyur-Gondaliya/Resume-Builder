class AppError extends Error {
  public statusCode: number;
  public status: string;
  public isOperational: boolean;
  public error: any;

  constructor(message: string, statusCode: number, error: any) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;
    this.error = error;

    Error.captureStackTrace(this, this.constructor);
  }
}

export { AppError };
