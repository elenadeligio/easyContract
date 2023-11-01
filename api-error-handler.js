const ApiError = require("./api-error");

function apiErrorHandler(err, req, res, next) {
    console.log(err);

    if (err instanceof ApiError) {
        res.status(err.code).json(err.message);
        return;
    }
    next();
}

module.exports = apiErrorHandler