const mongoConnector = require('../config/database/mongo_connector');
const ApiError = require('./errors/error');
const errorHandlerHelper = require('./helpers/error_handler_helper');
const responseCodesAndMessages = require('./utils/constants/http_response_status_codes_and_messages.json');


const express = require('express');
const cors = require('cors');


// Connectiong to the Database
mongoConnector();
const app = express();

// Body parser, reading data from body into req.body
app.use(express.json());

// Enabling cors
app.use(cors({
    methods: '*',
    origin: '*'
}));


/**
 * Catching undefined routes and returning an error
 */
app.all('*', (req, res, next) => {
    const message = "Requested URL --> " + req.originalUrl + " - " +responseCodesAndMessages.not_found.message;
    next(new ApiError(message, responseCodesAndMessages.not_found.statusCode));
});


// Error Handler For the Requests
app.use(errorHandlerHelper);



module.exports = app;