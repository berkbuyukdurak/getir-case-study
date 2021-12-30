const express = require('express');
const cors = require('cors');
const request = require("supertest"); // for testing web api easily
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const serverRouter = require('../../routes/router');
const app = require('../../app');

jest.setTimeout(30000);

describe("Testing the onboarding route", () => {
    it("GET / - success", async () => {
        const response = await request(app).get("/");
        expectOnboardSuccessfullResponse(response, 200);
    });
});

describe("Testing the fetching data route", () => {
    it("Successfully filtering the records and returning them", async () => {
        const response = await request(app).post('/api/records').send(requestBody);
        expectSuccessfulResponse(response);
    });

    it("Invalid request body", async() => {
        const reqBody = {"hello": "world"};
        const response = await request(app).post('/api/records').send(reqBody);
        expectErrorfulResponse(response, 500);
    });

    it("Start date is larger than end date in request body.", async () => {
        const requestBody = {
            "startDate": "2019-01-26",
            "endDate": "2018-02-02",
            "minCount": 2700,
            "maxCount": 3000
            };
            const response = await request(app).post('/api/records').send(requestBody);
            expectErrorfulResponse(response, 500);
    });

    it("Min count is larger than max count in request body.", async () => {
        const requestBody = {
            "startDate": "2016-01-26",
            "endDate": "2018-02-02",
            "minCount": 3100,
            "maxCount": 3000
            };
            const response = await request(app).post('/api/records').send(requestBody);
            expectErrorfulResponse(response, 500);
    });

    it("startDate is missing in request body.", async () => {
        const requestBody = {
            "endDate": "2018-02-02",
            "minCount": 3100,
            "maxCount": 3000
            };
            const response = await request(app).post('/api/records').send(requestBody);
            expectErrorfulResponse(response, 500);
    });

    it("endDate is missing in request body.", async () => {
        const requestBody = {
            "startDate": "2016-01-26",
            "minCount": 3100,
            "maxCount": 3000
            };
            const response = await request(app).post('/api/records').send(requestBody);
            expectErrorfulResponse(response, 500);
    });

    it("Min count is missing in request body.", async () => {
        const requestBody = {
            "startDate": "2016-01-26",
            "endDate": "2018-02-02",
            "maxCount": 3000
            };
            const response = await request(app).post('/api/records').send(requestBody);
            expectErrorfulResponse(response, 500);
    });

    it("Max count is missing in request body.", async () => {
        const requestBody = {
            "startDate": "2016-01-26",
            "endDate": "2018-02-02",
            "minCount": 3100
            };
            const response = await request(app).post('/api/records').send(requestBody);
            expectErrorfulResponse(response, 500);
    });
});

describe("Testing Request Methods other that POST.", () => {

    it("GET /api/records - error", async () => {
        const response = await request(app).get('/api/records');
        expectErrorfulResponse(response, 500);
    });
});

describe("Testing Different Endpoints.", () => {

    it("POST /api/rec - error", async () => {
        const response = await request(app).post('/api/rec').send(requestBody);
        expectErrorfulResponse(response, 500);
    });

    it("GET /api/rec - error", async () => {
        const response = await request(app).post('/api/rec').send(requestBody);
        expectErrorfulResponse(response, 500);
    });
});


const requestBody = {
    "startDate": "2016-01-26",
    "endDate": "2018-02-02",
    "minCount": 2700,
    "maxCount": 3000
    };


const expectOnboardSuccessfullResponse = (response, status) => {
    expect(response.status).toEqual(status);
    expect(response.body).toHaveProperty('code');
    expect(response.body).toHaveProperty('msg');
    expect(response.body).toHaveProperty('details');
};

const expectSuccessfulResponse = (response) => {
    expect(response.status).toEqual(200)
    expect(response.body).toHaveProperty('code')
    expect(response.body).toHaveProperty('msg')
    expect(response.body).toHaveProperty('records')
};

const expectErrorfulResponse = (response, status) => {
    expect(response.status).toEqual(status);
    expect(response.body).toHaveProperty('code');
    expect(response.body).toHaveProperty('msg');
    expect(response.body).not.toHaveProperty('records');
};