const errorHandler = (err, req, res, next) => {
  console.log("erro backend : ", err.name);
  console.log("erro backend : ", err);
  if (err.name === "xml") {
    res.setHeader("Content-Type", "application/xml");
    res.status(err.status).send(`<statusCode>02</statusCode>
        <statusMessage>Error, ${err.message}</statusMessage>`);
  } else if (
    err.name === "SequelizeValidationError" ||
    err.name === "SequelizeUniqueConstraintError"
  ) {
    let errors = [];
    err.errors.forEach((el) => {
      errors.push(el.message);
    });
    res.status(400).json({
      message: "Validation Error",
      details: errors,
    });
  } else if (err.name === "Custom_Error") {
    res.status(err.status).json({
      message: err.message,
      data: err.data ? err.data : null,
      details: err.details ? err.details : null,
    });
  } else {
    res.status(500).json({
      message: "Internal Server Error",
      details: err.message,
    });
  }
};

module.exports = errorHandler;
