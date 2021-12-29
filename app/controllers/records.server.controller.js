const logger = require('../utils/logger/logger');
const apiResponse = require('../utils/api_response');
const ApiError = require('../errors/error');
const responseCodesAndMessages = require('../utils/constants/http_response_status_codes_and_messages.json');
const recordService = require('../services/records.service');

const fetchData = async (req, res, next) => {
    try{        
        recordService.filterFetchedData(req.body).then(returnedRecords => {
            let responsePayload = {};
            let returnSuccessPayload = {
                message: "",
                statusCode: responseCodesAndMessages.ok.statusCode
            };
            if(returnedRecords.length > 0){
                responsePayload = apiResponse.apiResponsePayload({records: returnedRecords});
                returnSuccessPayload.message = "Data is successfully fetched and filtered."
                const returnSuccess = `${returnSuccessPayload.message} ${returnSuccessPayload.statusCode}`;
                logger.info(returnSuccess)
            }else{
                const message = responseCodesAndMessages.data_not_found.message;
                responsePayload = apiResponse.apiResponsePayload({description: message});
                returnSuccessPayload.message = message;
                const returnSuccess = `${returnSuccessPayload.message} ${returnSuccessPayload.statusCode}`;
                logger.info(returnSuccess);

            }

            // Returning the response
            res.status(responseCodesAndMessages.data_not_found.statusCode).send(responsePayload);

        });
    } catch(err){
        // Logging and returning the error
        const serverError = {
            message: responseCodesAndMessages.server_error.message,
            statusCode: responseCodesAndMessages.server_error.statusCode
        }
        const message = `${serverError.message} ${serverError.statusCode}`;
        logger.error(message);
        return next(new ApiError(serverError.message, serverError.statusCode));
    }
}

module.exports = {
    fetchData
}