"use strict";

const router = require("express").Router(),
    gmbhtextsController = require("../controllers/gmbhtextsController");
const roles = require("../roles");

router.get("", roles.authenticated(), gmbhtextsController.index, gmbhtextsController.indexView);
router.get("/new", gmbhtextsController.new);
router.post("/create", gmbhtextsController.create, gmbhtextsController.redirectView);
router.get("/:id/edit", gmbhtextsController.edit);
router.put("/:id/update", gmbhtextsController.update, gmbhtextsController.redirectView);
router.delete("/:id/delete", gmbhtextsController.delete, gmbhtextsController.redirectView);

module.exports = router;