class ApiError {
    code;
    message;
    constructor(code, message) {
        this.code = code;
        this.message = message;
    }

    static unathorized(msg){
        return new ApiError(401, msg);
    }

    static forbidden(msg){
        return new ApiError(403, msg);
    }
}

module.exports = ApiError;