const Vereinlongtext = require("../models/vereinlongtext"),

    getVereinlongtextParams = body => {
        return {
            vereinlongtext: body.vereinlongtext,
            category: body.category,
            subcategory: body.subcategory
        };
    };

module.exports = {

    index: (req, res, next) => {
        Vereinlongtext.find()
            .then(vereinlongtexts => {
                res.locals.vereinlongtexts = vereinlongtexts;
                next();
            })
            .catch(error => {
                console.log(`Fehler beim Abrufen von Textbausteinen: ${error.message}`);
                next(error);
            });
    },
    indexView: (req, res) => {
        res.render("vereinlongtexts/index");
    },

    new: (req, res) => {
        res.render("vereinlongtexts/new");
    },

    create: (req, res, next) => {
        let vereinlongtextParams = getVereinlongtextParams(req.body);
        Vereinlongtext.create(vereinlongtextParams)
            .then(vereinlongtext => {
                res.locals.redirect = "/vereinlongtexts";
                res.locals.vereinlongtext = vereinlongtext;
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
        let vereinlongtextId = req.params.id;
        Vereinlongtext.findById(vereinlongtextId)
            .then(vereinlongtext => {
                res.render("vereinlongtexts/edit", {
                    vereinlongtext: vereinlongtext
                });
            })
            .catch(error => {
                console.log(`Fehler beim Abrufen des Textes nach ID: ${error.message}`);
                next(error);
            });
    },

    update: (req, res, next) => {
        let vereinlongtextId = req.params.id,
            vereinlongtextParams = getVereinlongtextParams(req.body);

        Vereinlongtext.findByIdAndUpdate(vereinlongtextId, {
            $set: vereinlongtextParams
        })
            .then(vereinlongtext => {
                res.locals.redirect = `/vereinlongtexts`;
                res.locals.vereinlongtext = vereinlongtext;
                next();
            })
            .catch(error => {
                console.log(`Fehler beim Aktualisieren des Textes nach ID: ${error.message}`);
                next(error);
            });
    },

    delete: (req, res, next) => {
        let vereinlongtextId = req.params.id;
        Vereinlongtext.findByIdAndRemove(vereinlongtextId)
            .then(() => {
                res.locals.redirect = "/vereinlongtexts";
                next();
            })
            .catch(error => {
                console.log(`Fehler beim Löschen von Text nach ID: ${error.message}`);
                next();
            });
        },
};