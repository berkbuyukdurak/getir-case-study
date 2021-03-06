const mongoConnector = require('../config/database/mongo_connector');
const ApiError = require('./errors/error');
const errorHandlerHelper = require('./helpers/error_handler_helper');
const responseCodesAndMessages = require('./utils/constants/http_response_status_codes_and_messages.json');
const router = require('./routes/router');

const express = require('express');
const cors = require('cors');
const _ = require('lodash');


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
 * Entry point of API
 */
app.use('/', router.use(errorHandlerHelper));


/**
 * Catching undefined routes and returning an error
 */
app.all('*', (req, res, next) => {
    let invalidMethod = "";
    const message = "Requested URL --> " + req.originalUrl + " - " +responseCodesAndMessages.not_found.message;
    if(!_.isEqual(req.method, 'POST')){
        invalidMethod = `Invalid Request Method! --> ${req.method} | `;
    }
    next(new ApiError(invalidMethod + message, responseCodesAndMessages.not_found.statusCode));
});


// Error Handler For the Requests
app.use(errorHandlerHelper);



module.exports = app;