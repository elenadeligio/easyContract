"use strict";

const router = require("express").Router(),
projectoverviewController = require("../controllers/projectoverviewController");
const roles = require("../roles");

router.get("", roles.authenticated(), projectoverviewController.index, projectoverviewController.indexView);
router.get("/newProject", projectoverviewController.newProject);
router.post("/create", projectoverviewController.create, projectoverviewController.redirectView);
router.get("/:id/edit", projectoverviewController.edit);
router.put("/:id/update", projectoverviewController.update, projectoverviewController.redirectView);
router.get("/:id", projectoverviewController.projectDetail, projectoverviewController.projectDetailView);
router.delete("/:id/delete", projectoverviewController.delete, projectoverviewController.redirectView);

module.exports = router;

