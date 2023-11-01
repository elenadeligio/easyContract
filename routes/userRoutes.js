"use strict";

const router = require("express").Router(),
    usersController = require("../controllers/usersController");
const roles = require('../roles');

router.get("/", roles.authenticated(), roles.authorize(roles.ROLE.ADMIN), usersController.index, usersController.indexView);
router.get("/new", roles.authorize(roles.ROLE.ADMIN), usersController.new);
router.post(
    "/create",
    usersController.validate,
    usersController.create,
    usersController.redirectView
);
//
router.get("/login", usersController.login);
router.post("/login", usersController.authenticate);
router.get("/logout", usersController.logout, usersController.redirectView);
router.get("/:id/edit", roles.authorize(roles.ROLE.ADMIN), usersController.edit);
router.put("/:id/update", roles.authorize(roles.ROLE.ADMIN), usersController.update, usersController.redirectView);
router.get("/:id", usersController.show, usersController.showView);
router.delete("/:id/delete", roles.authorize(roles.ROLE.ADMIN), usersController.delete, usersController.redirectView);

module.exports = router;