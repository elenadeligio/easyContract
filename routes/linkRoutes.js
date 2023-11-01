"use strict";

const router = require("express").Router(),
    linksController = require("../controllers/linksController");
const roles = require('../roles');

router.get("", roles.authenticated(), roles.authorize(roles.ROLE.BASIC, roles.ROLE.ADMIN), linksController.index, linksController.indexView);
router.get("/new", roles.authorize(roles.ROLE.BASIC, roles.ROLE.ADMIN), linksController.new);
router.post("/create", roles.authorize(roles.ROLE.BASIC, roles.ROLE.ADMIN), linksController.create, linksController.redirectView);
router.get("/:id/edit", roles.authorize(roles.ROLE.BASIC, roles.ROLE.ADMIN), linksController.edit);
router.put("/:id/update", roles.authorize(roles.ROLE.BASIC, roles.ROLE.ADMIN), linksController.update, linksController.redirectView);
router.get("/:id", roles.authorize(roles.ROLE.BASIC, roles.ROLE.ADMIN), linksController.show, linksController.showView);
router.delete("/:id/delete", roles.authorize(roles.ROLE.BASIC, roles.ROLE.ADMIN), linksController.delete, linksController.redirectView);

module.exports = router;