"use strict";

const router = require("express").Router(),
    userRoutes = require("./userRoutes"),
    linkRoutes = require("./linkRoutes"),
    wikiRoutes = require("./wikiRoutes"),
    calendarRoutes = require("./calendarRoutes"),
    projectoverviewRoutes = require("./projectoverviewRoutes"),
    contracttoolRoutes = require("./contracttoolRoutes"),
    vereintextRoutes = require("./vereintextRoutes"),
    vereinlongtextRoutes = require("./vereinlongtextRoutes"),
    ugtextRoutes = require("./ugtextRoutes"),
    gmbhtextRoutes = require("./gmbhtextRoutes"),
    errorRoutes = require("./errorRoutes"),
    mainRoutes = require("./mainRoutes"),
    homeRoutes = require("./homeRoutes");

router.use("/main", mainRoutes);
router.use("/users", userRoutes);
router.use("/links", linkRoutes);
router.use("/wikiv", wikiRoutes);
router.use("/calendarv", calendarRoutes);
router.use("/projectoverview", projectoverviewRoutes);
router.use("/contracttool", contracttoolRoutes);
router.use("/vereintexts", vereintextRoutes);
router.use("/vereinlongtexts", vereinlongtextRoutes);
router.use("/ugtexts", ugtextRoutes);
router.use("/gmbhtexts", gmbhtextRoutes);
router.use("/", homeRoutes);
router.use("/", errorRoutes);

module.exports = router;