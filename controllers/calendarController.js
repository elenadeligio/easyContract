"use strict";

const Calendar = require("../models/calendar"),
    httpStatus = require("http-status-codes"),
    User = require("../models/user"),

    getCalendarParams = body => {
        return {
            title: body.title,
            text: body.text
        };
    };

module.exports = {

    index: (req, res, next) => {
        Calendar.find()
            .then(calendars => {
                res.locals.calendars = calendars;
                next();
            })
            .catch(error => {
                console.log(`Error fetching links: ${error.message}`);
                next(error);
            });
    },
    indexView: (req, res) => {
        res.render("calendarv/index");
    },

    redirectView: (req, res, next) => {
        let redirectPath = res.locals.redirect;
        if (redirectPath !== undefined) res.redirect(redirectPath);
        else next();
    },
};
