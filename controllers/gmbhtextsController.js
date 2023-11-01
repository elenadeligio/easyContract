const Gmbhtext = require("../models/gmbhtext"),

    getGmbhtextParams = body => {
        return {
            gmbhtext: body.gmbhtext,
            category: body.category
        };
    };

module.exports = {

    index: (req, res, next) => {
        Gmbhtext.find()
            .then(gmbhtexts => {
                res.locals.gmbhtexts = gmbhtexts;
                next();
            })
            .catch(error => {
                console.log(`Fehler beim Abrufen von Textbausteinen: ${error.message}`);
                next(error);
            });
    },
    indexView: (req, res) => {
        res.render("gmbhtexts/index");
    },

    new: (req, res) => {
        res.render("gmbhtexts/new");
    },

    create: (req, res, next) => {
        let gmbhtextParams = getGmbhtextParams(req.body);
        Gmbhtext.create(gmbhtextParams)
            .then(gmbhtext => {
                res.locals.redirect = "/gmbhtexts";
                res.locals.gmbhtext = gmbhtext;
                next();
            })
            .catch(error => {
                console.log(`Fehler beim Speichern von Textbausteinen: ${error.message}`);
                next(error);
            });
    },

    redirectView: (req, res, next) => {
        let redirectPath = res.locals.redirect;
        if (redirectPath !== undefined) res.redirect(redirectPath);
        else next();
    },

    edit: (req, res, next) => {
        let gmbhtextId = req.params.id;
        Gmbhtext.findById(gmbhtextId)
            .then(gmbhtext => {
                res.render("gmbhtexts/edit", {
                    gmbhtext: gmbhtext
                });
            })
            .catch(error => {
                console.log(`Fehler beim Abrufen des Textes nach ID: ${error.message}`);
                next(error);
            });
    },

    update: (req, res, next) => {
        let gmbhtextId = req.params.id,
            gmbhtextParams = getGmbhtextParams(req.body);

        Gmbhtext.findByIdAndUpdate(gmbhtextId, {
            $set: gmbhtextParams
        })
            .then(gmbhtext => {
                res.locals.redirect = `/gmbhtexts`;
                res.locals.gmbhtext = gmbhtext;
                next();
            })
            .catch(error => {
                console.log(`Fehler beim Aktualisieren des Textes nach ID: ${error.message}`);
                next(error);
            });
    },

    delete: (req, res, next) => {
        let gmbhtextId = req.params.id;
        Gmbhtext.findByIdAndRemove(gmbhtextId)
            .then(() => {
                res.locals.redirect = "/gmbhtexts";
                next();
            })
            .catch(error => {
                console.log(`Fehler beim Löschen von Text nach ID: ${error.message}`);
                next();
            });
    },
};