
const router = require("express").Router(),
    vereintextsController = require("../controllers/vereintextsController");
const roles = require("../roles");

router.get("", roles.authenticated(), vereintextsController.index, vereintextsController.indexView);
router.get("/new", vereintextsController.new);
router.post("/create", vereintextsController.create, vereintextsController.redirectView);
router.get("/:id/edit", vereintextsController.edit);
router.put("/:id/update", vereintextsController.update, vereintextsController.redirectView);
router.delete("/:id/delete", vereintextsController.delete, vereintextsController.redirectView);

module.exports = router;