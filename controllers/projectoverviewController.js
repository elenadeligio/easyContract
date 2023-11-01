"use strict";

const ProjectOverview = require("../models/projectoverview"),

getProjectParams = body => {
    return {
        title: body.title,
        details: body.details,
        date: body.date,
        notes: body.notes,
        category: body.category
    };
};

module.exports = {
    
    index: (req, res, next) => {
        ProjectOverview.find()
            .then(projects => {
                res.locals.projects = projects;
                next();
            })
            .catch(error => {
                console.log(`Error fetching projects: ${error.message}`);
                next(error);
            });
    },

    indexView: (req, res, next) => {
        res.render("projectoverview/index");
    },

    newProject: (req, res) => {
        res.render("projectoverview/newProject");
    },

    create: (req, res, next) => {
        let projectParams = getProjectParams(req.body);
        ProjectOverview.create(projectParams)
            .then(project => {
                res.locals.redirect = "/projectoverview";
                res.locals.project = project;
                next();
            })
            .catch(error => {
                console.log(`Error saving project: ${error.message}`);
                next(error);
            });
    },

    redirectView: (req, res, next) => {
        let redirectPath = res.locals.redirect;
        if (redirectPath !== undefined) res.redirect(redirectPath);
        else next();
    },

    projectDetail: (req, res, next) => {
        let projectId = req.params.id;
        ProjectOverview.findById(projectId)
            .then(project => {
                res.locals.project = project;
                next();
            })
            .catch(error => {
                console.log(`Error fetching project by ID: ${error.message}`);
                next(error);
            });
    },

    projectDetailView: (req, res) => {
        res.render("projectoverview/projectDetail");
    },

    edit: (req, res, next) => {
        let projectId = req.params.id;
        ProjectOverview.findById(projectId)
            .then(project => {
                res.render("projectoverview/edit", {
                    project: project
                });
            })
            .catch(error => {
                console.log(`Error fetching project by ID: ${error.message}`);
                next(error);
            });
    },

    update: (req, res, next) => {
        let projectId = req.params.id,
            projectParams = getProjectParams(req.body);

        ProjectOverview.findByIdAndUpdate(projectId, {
            $set: projectParams
        })
            .then(project => {
                res.locals.redirect = `/projectoverview/${projectId}`;
                res.locals.project = project;
                next();
            })
            .catch(error => {
                console.log(`Error updating project by ID: ${error.message}`);
                next(error);
            });
    },

    delete: (req, res, next) => {
        let projectId = req.params.id;
        ProjectOverview.findByIdAndRemove(projectId)
            .then(() => {
                res.locals.redirect = "/projectoverview";
                next();
            })
            .catch(error => {
                console.log(`Error deleting project by ID: ${error.message}`);
                next();
            });
    },

    respondJSON: (req, res) => {
        res.json({
            status: httpStatus.OK,
            data: res.locals
        });
    },

    errorJSON: (error, req, res, next) => {
        let errorObject;
        if (error) {
            errorObject = {
                status: httpStatus.INTERNAL_SERVER_ERROR,
                message: error.message
            };
        } else {
            errorObject = {
                status: httpStatus.OK,
                message: "Unknown Error."
            };
        }
        res.json(errorObject);
    }

};