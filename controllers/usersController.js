'use strict';

const User = require('../models/user'),
    passport = require("passport"),

    getUserParams = body => {
        return {
            roles: body.role,
            name: {
                first: body.first,
                last: body.last
            },
            email: body.email,
            password: body.password
        };
    };

const { body, validationResult } = require('express-validator');

module.exports = {
    index: (req, res, next) => {
        User.find()
            .then(users => {
                res.locals.users = users;
                next();
            })
            .catch(error => {
                console.log(`Fehler beim Abrufen von Benutzern: ${error.message}`);
                next(error);
            });
    },
    indexView: (req, res) => {
        res.render("users/index");
    },

    new: (req, res) => {
        res.render("users/new");
    },

    create: (req, res, next) => {
        if (req.skip) return next();
        let newUser = new User(getUserParams(req.body));
        User.register(newUser, req.body.password, (e, user) => {
            if (user) {
                req.flash("Erfolg", `Konto von ${user.fullName}  erfolgreich erstellt!`);
                res.locals.redirect = "/users";
                next();
            } else {
                req.flash("Fehler", `Benutzerkonto konnte nicht erstellt werden, weil: ${e.message}.`);
                res.locals.redirect = "/users/new";
                next();
            }
        });
    },

    redirectView: (req, res, next) => {
        let redirectPath = res.locals.redirect;
        if (redirectPath !== undefined) res.redirect(redirectPath);
        else next();
    },

    show: (req, res, next) => {
        let userId = req.params.id;
        User.findById(userId)
            .then(user => {
                res.locals.user = user;
                next();
            })
            .catch(error => {
                console.log(`Fehler beim Abrufen des Benutzers nach ID: ${error.message}`);
                next(error);
            });
    },

    showView: (req, res) => {
        res.render("users/show");
    },

    edit: (req, res, next) => {
        let userId = req.params.id;
        User.findById(userId)
            .then(user => {
                res.render("users/edit", {
                    user: user
                });
            })
            .catch(error => {
                console.log(`Fehler beim Abrufen des Benutzers nach ID: ${error.message}`);
                next(error);
            });
    },

    update: (req, res, next) => {
        let userId = req.params.id,
            userParams = getUserParams(req.body);

        User.findByIdAndUpdate(userId, {
            $set: userParams
        })
            .then(user => {
                res.locals.redirect = `/users/${userId}`;
                res.locals.user = user;
                next();
            })
            .catch(error => {
                console.log(`Fehler beim Aktualisieren des Benutzers nach ID: ${error.message}`);
                next(error);
            });
    },

    delete: (req, res, next) => {
        let userId = req.params.id;
        User.findByIdAndRemove(userId)
            .then(() => {
                res.locals.redirect = "/users";
                next();
            })
            .catch(error => {
                console.log(`Fehler beim Löschen des Benutzers nach ID: ${error.message}`);
                next();
            });
    },

    login: (req, res) => {
        res.render("users/login");
    },

    authenticate: passport.authenticate("local", {
        failureRedirect: "/",
        failureFlash: "Login fehlgeschlagen...",
        successRedirect: "/main",
        successFlash: "Eingeloggt!"
    }),

    validate: (req, res, next) => {
        body('email').isEmail().normalizeEmail()

        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        } else {
            next();
        }
    },

    logout: (req, res, next) => {
        req.logout();
        req.flash("Erfolg", "Sie sind ausgeloggt!");
        res.locals.redirect = "/";
        next();
    }
};