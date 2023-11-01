"use strict";

const router = require("express").Router(),
    mainController = require("../controllers/mainController");

router.get("/", mainController.index);

module.exports = router;