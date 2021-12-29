const ApiError = require('../../errors/error');
const responseCodesAndMessages = require('../../utils/constants/http_response_status_codes_and_messages.json');
const _ = require('lodash');

module.exports.validatePostRequest = (schema) => (req, res, next) => {
    const { error, value } = schema.validate(req.body);
    if (error) {
        const errorContent = _.map(error.details, (detail) => {
            return detail.message;
        }).join(", ");
        const message = responseCodesAndMessages.validation_error.message + " Error: " + errorContent;
        return next(new ApiError(message, responseCodesAndMessages.validation_error.statusCode));
    }
    Object.assign(req, value);
    return next();
};