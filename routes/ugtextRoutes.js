"use strict";

const router = require("express").Router(),
    ugtextsController = require("../controllers/ugtextsController");

router.get("", ugtextsController.index, ugtextsController.indexView);
router.get("/new", ugtextsController.new);
router.post("/create", ugtextsController.create, ugtextsController.redirectView);
router.get("/:id/edit", ugtextsController.edit);
router.put("/:id/update", ugtextsController.update, ugtextsController.redirectView);
router.delete("/:id/delete", ugtextsController.delete, ugtextsController.redirectView);

module.exports = router;