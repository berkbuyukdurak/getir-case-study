const express = require('express');
const cors = require('cors');



const mongoConnector = require('../config/database/mongo_connector');

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



module.exports = app;