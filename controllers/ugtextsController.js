const Ugtext = require("../models/ugtext"),

    getUgtextParams = body => {
        return {
            ugtext: body.ugtext,
            category: body.category
        };
    };

module.exports = {

    index: (req, res, next) => {
        Ugtext.find()
            .then(ugtexts => {
                res.locals.ugtexts = ugtexts;
                next();
            })
            .catch(error => {
                console.log(`Fehler beim Abrufen von Textbausteinen: ${error.message}`);
                next(error);
            });
    },
    indexView: (req, res) => {
        res.render("ugtexts/index");
    },

    new: (req, res) => {
        res.render("ugtexts/new");
    },

    create: (req, res, next) => {
        let ugtextParams = getUgtextParams(req.body);
        Ugtext.create(ugtextParams)
            .then(ugtext => {
                res.locals.redirect = "/ugtexts";
                res.locals.ugtext = ugtext;
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
        let ugtextId = req.params.id;
        Ugtext.findById(ugtextId)
            .then(ugtext => {
                res.render("ugtexts/edit", {
                    ugtext: ugtext
                });
            })
            .catch(error => {
                console.log(`Fehler beim Abrufen des Textes nach ID: ${error.message}`);
                next(error);
            });
    },

    update: (req, res, next) => {
        let ugtextId = req.params.id,
            ugtextParams = getUgtextParams(req.body);

        Ugtext.findByIdAndUpdate(ugtextId, {
            $set: ugtextParams
        })
            .then(ugtext => {
                res.locals.redirect = `/ugtexts`;
                res.locals.ugtext = ugtext;
                next();
            })
            .catch(error => {
                console.log(`Fehler beim Aktualisieren des Textes nach ID: ${error.message}`);
                next(error);
            });
    },

    delete: (req, res, next) => {
        let ugtextId = req.params.id;
        Ugtext.findByIdAndRemove(ugtextId)
            .then(() => {
                res.locals.redirect = "/ugtexts";
                next();
            })
            .catch(error => {
                console.log(`Fehler beim Löschen von Text nach ID: ${error.message}`);
                next();
            });
    },
};