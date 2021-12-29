const router = require('express').Router();
const apiResponse = require('../utils/api_response');
const responseCodesAndMessages = require('../utils/constants/http_response_status_codes_and_messages.json');



/**
 * Onboarding Route
 * This route will give the information about the RESTful API.
 */
router.route('/').get((req, res) => {
    var apiDescription = {
        "Welcome Message": responseCodesAndMessages.onboarding.message,
        "Explanation": "It is a RESTful API with a single endpoint that fetches the data in the provided MongoDB collection and return the results in the requested format.",
        "Usage": "To use this API properly, please visit https://github.com/berkbuyukdurak/getir-case-study#readme."
    };
    var responsePayload = apiResponse.apiResponsePayload({details: apiDescription});
    res.status(responseCodesAndMessages.onboarding.statusCode).send(responsePayload);
})

module.exports = router;