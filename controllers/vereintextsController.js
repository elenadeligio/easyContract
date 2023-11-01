const Vereintext = require("../models/vereintext"),

    getVereintextParams = body => {
        return {
            vereintext: body.vereintext,
            category: body.category
        };
    };

module.exports = {

    index: (req, res, next) => {
        Vereintext.find()
            .then(vereintexts => {
                res.locals.vereintexts = vereintexts;
                next();
            })
            .catch(error => {
                console.log(`Fehler beim Abrufen von Textbausteinen: ${error.message}`);
                next(error);
            });
    },
    indexView: (req, res) => {
        res.render("vereintexts/index");
    },

    new: (req, res) => {
        res.render("vereintexts/new");
    },

    create: (req, res, next) => {
        let vereintextParams = getVereintextParams(req.body);
        Vereintext.create(vereintextParams)
            .then(vereintext => {
                res.locals.redirect = "/vereintexts";
                res.locals.vereintext = vereintext;
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
        let vereintextId = req.params.id;
        Vereintext.findById(vereintextId)
            .then(vereintext => {
                res.render("vereintexts/edit", {
                    vereintext: vereintext
                });
            })
            .catch(error => {
                console.log(`Fehler beim Abrufen des Textes nach ID: ${error.message}`);
                next(error);
            });
    },

    update: (req, res, next) => {
        let vereintextId = req.params.id,
            vereintextParams = getVereintextParams(req.body);

        Vereintext.findByIdAndUpdate(vereintextId, {
            $set: vereintextParams
        })
            .then(vereintext => {
                res.locals.redirect = `/vereintexts`;
                res.locals.vereintext = vereintext;
                next();
            })
            .catch(error => {
                console.log(`Fehler beim Aktualisieren des Textes nach ID: ${error.message}`);
                next(error);
            });
    },

    delete: (req, res, next) => {
        let vereintextId = req.params.id;
        Vereintext.findByIdAndRemove(vereintextId)
            .then(() => {
                res.locals.redirect = "/vereintexts";
                next();
            })
            .catch(error => {
                console.log(`Fehler beim Löschen von Text nach ID: ${error.message}`);
                next();
            });
    },
};