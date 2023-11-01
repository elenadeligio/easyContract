"use strict";

const router = require("express").Router(),
    wikivController = require("../controllers/wikivController");
const roles = require("../roles");

router.get("", roles.authenticated(), wikivController.index, wikivController.indexView);
router.get("/new", wikivController.new);
router.post("/create", wikivController.create, wikivController.redirectView);
router.get("/:id/edit", wikivController.edit);
router.put("/:id/update", wikivController.update, wikivController.redirectView);
router.get("/:id", wikivController.show, wikivController.showView);
router.delete("/:id/delete", wikivController.delete, wikivController.redirectView);

module.exports = router;