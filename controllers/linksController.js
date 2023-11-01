const Link = require("../models/link"),

    getLinkParams = body => {
        return {
            title: body.title,
            url: body.url,
            label: body.label
        };
    };

module.exports = {

    index: (req, res, next) => {
        Link.find()
            .then(links => {
                res.locals.links = links;
                next();
            })
            .catch(error => {
                console.log(`Fehler beim Abrufen von Links: ${error.message}`);
                next(error);
            });
    },

    indexView: (req, res) => {
        res.render("links/index");
    },

    new: (req, res) => {
        res.render("links/new");
    },

    create: (req, res, next) => {
        let linkParams = getLinkParams(req.body);
        Link.create(linkParams)
            .then(link => {
                res.locals.redirect = "/links";
                res.locals.link = link;
                next();
            })
            .catch(error => {
                console.log(`Fehler beim Speichern von Links: ${error.message}`);
                next(error);
            });
    },

    redirectView: (req, res, next) => {
        let redirectPath = res.locals.redirect;
        if (redirectPath !== undefined) res.redirect(redirectPath);
        else next();
    },

    show: (req, res, next) => {
        let linkId = req.params.id;
        Link.findById(linkId)
            .then(link => {
                res.locals.link = link;
                next();
            })
            .catch(error => {
                console.log(`Fehler beim Abrufen des Links nach ID: ${error.message}`);
                next(error);
            });
    },

    showView: (req, res) => {
        res.render("links/show");
    },

    edit: (req, res, next) => {
        let linkId = req.params.id;
        Link.findById(linkId)
            .then(link => {
                res.render("links/edit", {
                    link: link
                });
            })
            .catch(error => {
                console.log(`Fehler beim Abrufen des Links nach ID: ${error.message}`);
                next(error);
            });
    },

    update: (req, res, next) => {
        let linkId = req.params.id,
            linkParams = getLinkParams(req.body);

        Link.findByIdAndUpdate(linkId, {
            $set: linkParams
        })
            .then(link => {
                res.locals.redirect = `/links`;
                res.locals.link = link;
                next();
            })
            .catch(error => {
                console.log(`Fehler beim Aktualisieren des Links nach ID: ${error.message}`);
                next(error);
            });
    },

    delete: (req, res, next) => {
        let linkId = req.params.id;
        Link.findByIdAndRemove(linkId)
            .then(() => {
                res.locals.redirect = "/links";
                next();
            })
            .catch(error => {
                console.log(`Fehler beim Löschen des Links nach ID: ${error.message}`);
                next();
            });
    },
};