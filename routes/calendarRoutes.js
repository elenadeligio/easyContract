"use strict";

const router = require("express").Router(),
    calendarController = require("../controllers/calendarController");
const roles = require("../roles");

router.get("", roles.authenticated(), roles.authorize(roles.ROLE.BASIC, roles.ROLE.ADMIN), calendarController.index, calendarController.indexView);

module.exports = router;