class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    // console.log(this.statusCode);
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor); //!This line is used to customize the stack trace of the Error object. By default, when an Error object is created, it captures the current call stack, which includes all the function calls leading to the point where the error object is created. However, sometimes you want to exclude certain parts of the call stack from being included in the stack trace.        The Error.captureStackTrace() method allows you to customize the stack trace by specifying the object for which you want to capture the stack trace and optionally a constructor function.
  }
}

export default AppError;
