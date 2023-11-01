
const router = require("express").Router(),
    vereinlongtextsController = require("../controllers/vereinlongtextsController");
const roles = require("../roles");

router.get("", roles.authenticated(), vereinlongtextsController.index, vereinlongtextsController.indexView);
router.get("/new", vereinlongtextsController.new);
router.post("/create", vereinlongtextsController.create, vereinlongtextsController.redirectView);
router.get("/:id/edit", vereinlongtextsController.edit);
router.put("/:id/update", vereinlongtextsController.update, vereinlongtextsController.redirectView);
router.delete("/:id/delete", vereinlongtextsController.delete, vereinlongtextsController.redirectView);

module.exports = router;