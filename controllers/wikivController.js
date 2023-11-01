const Wiki = require("../models/wiki"),

    getWikiParams = body => {
        return {
            topic: body.topic,
            text: body.text,
            author: body.author,
            category: body.category
        };
    };

module.exports = {

    index: (req, res, next) => {
        Wiki.find()
            .then(wikiv => {
                res.locals.wikiv = wikiv;
                next();
            })
            .catch(error => {
                console.log(`Fehler beim Abrufen von Wiki: ${error.message}`);
                next(error);
            });
    },

    indexView: (req, res) => {
        res.render("wikiv/index");
    },

    new: (req, res) => {
        res.render("wikiv/new");
    },

    create: (req, res, next) => {
        let wikiParams = getWikiParams(req.body);
        Wiki.create(wikiParams)
            .then(wiki => {
                res.locals.redirect = "/wikiv";
                res.locals.wiki = wiki;
                next();
            })
            .catch(error => {
                console.log(`Fehler beim Speichern von Wiki: ${error.message}`);
                next(error);
            });
    },

    redirectView: (req, res, next) => {
        let redirectPath = res.locals.redirect;
        if (redirectPath !== undefined) res.redirect(redirectPath);
        else next();
    },

    show: (req, res, next) => {
        let wikiId = req.params.id;
        Wiki.findById(wikiId)
            .then(wiki => {
                res.locals.wiki = wiki;
                next();
            })
            .catch(error => {
                console.log(`Fehler beim Abrufen des Wikis nach ID: ${error.message}`);
                next(error);
            });
    },

    showView: (req, res) => {
        res.render("wikiv/show");
    },

    edit: (req, res, next) => {
        let wikiId = req.params.id;
        Wiki.findById(wikiId)
            .then(wiki => {
                res.render("wikiv/edit", {
                    wiki: wiki
                });
            })
            .catch(error => {
                console.log(`Fehler beim Abrufen des Wikis nach ID: ${error.message}`);
                next(error);
            });
    },

    update: (req, res, next) => {
        let wikiId = req.params.id,
            wikiParams = getWikiParams(req.body);

        Wiki.findByIdAndUpdate(wikiId, {
            $set: wikiParams
        })
            .then(wiki => {
                res.locals.redirect = `/wikiv/${wikiId}`;
                res.locals.wiki = wiki;
                next();
            })
            .catch(error => {
                console.log(`Fehler beim Aktualisieren des Wikis nach ID: ${error.message}`);
                next(error);
            });
    },

    delete: (req, res, next) => {
        let wikiId = req.params.id;
        Wiki.findByIdAndRemove(wikiId)
            .then(() => {
                res.locals.redirect = "/wikiv";
                next();
            })
            .catch(error => {
                console.log(`Fehler beim Löschen des Wikis nach ID: ${error.message}`);
                next();
            });
    },
};