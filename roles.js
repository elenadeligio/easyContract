const ApiError = require('./api-error');
const ROLE = {
    ADMIN: 'Admin',
    BASIC: 'Basic'
}

function authenticated() {
    return (req, res, next) => {
        if (!req.session || !req.user || !req.user.roles) {
            let redirectPath = "/";
            //ApiError.unathorized('Please log in.');
            res.redirect(redirectPath);
            return;
        }
        next();
    }
}

function authorize(...roles){
    const allowedRoles = roles;
    return(req, res, next) => {
        if (!isAuthorized(req.user.roles, allowedRoles)){
            next(ApiError.forbidden("You don't have access to this page."));
            return;
        }
        next();
    }
}

    function isAuthorized(userRoles, allowedRoles){
        let matches = [];
        for ( let i = 0; i < userRoles.length ; i++){
            for (let e = 0; e < allowedRoles.length; e++){
                if (userRoles[i] == allowedRoles[e]) matches.push(userRoles[i]);
            }
        }
        return matches.length > 0;
    }

module.exports = {
    ROLE: ROLE,
    authorize,
    authenticated
}