"use strict";

const router = require("express").Router(),
    contracttoolController = require("../controllers/contracttoolController");
const roles = require("../roles");

router.get("/", roles.authenticated(), roles.authorize(roles.ROLE.BASIC, roles.ROLE.ADMIN), contracttoolController.index);

module.exports = router;