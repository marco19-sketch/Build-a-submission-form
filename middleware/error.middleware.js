const notFoundHandler = function (req, res, next) {
  const err = new Error(`Cannot find ${req.originalUrl}`);
  err.status = 404;
  next(err);
};

const finalErrorHandler = (err, req, res, next) => {
  const status = err.status || 500;
  console.log(status);
  res
    .status(status)
    .json({
      error: true,
      status: status,
      message: err.message || "Internal Server Error (Check Server Logs)",
    });
};

export { notFoundHandler, finalErrorHandler };
