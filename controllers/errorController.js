"use strict";

const httpStatus = require("http-status-codes");

module.exports = {

    pageNotFoundError: (req, res) => {
        let errorCode = httpStatus.NOT_FOUND;
        res.status(errorCode);
        res.render("error");
    },

    internalServerError: (error, req, res, next) => {
        let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
        console.log(`Fehler: ${error.stack}`);
        res.status(errorCode);
        res.send(`${errorCode} | Tut uns leid, aber app hat ein Problem!`);
    }
};