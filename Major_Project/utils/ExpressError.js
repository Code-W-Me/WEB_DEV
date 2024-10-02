class ExpressError extends Error {
    constructor(status, message) {
        super(message); // call Error constructor with message
        this.statusCode = status; // use the parameter 'status', not 'statusCode'
    }
}

module.exports = ExpressError;
