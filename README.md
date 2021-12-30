# Getir Case Study Challenge

## Description

It is a RESTful API with a single endpoint that fetches the data in the provided MongoDB collection and return the results in the requested format.

## Tech Stack

* express - Node.js web application framework
* mongoose - MongoDB object modelin for Node.js
* lodash - Utili# functions library for iterating arrays, objects & strings
* winston - Simple and universal logging library

## Getting Started

Use the package manager [npm](https://www.npmjs.com/) to install project.

### 1) Clone the project

```bash
  git clone https://github.com/berkbuyukdurak/getir-case-study.git
```

### 2) Install the dependencies

```bash
    cd getir-case-study
    
    npm install
```

## How to Use

## Configuration

To configure the project, you can use the files in the config directory.

## How to Run

There are 2 ways to run this project.

### 1) If you want to run the project with development configurations

```bash
    npm run devStart
```

### 2) If you want to run the project with production configurations

```bash
    npm run prodStart
```

## Testing

If you want to run tests on the project, please use the following command.

```bash
    npm test
```
## How to Use

:warning: Beware, this API only accepts POST requests with JSON format.

### API Rerefence

#### Onboarding
```
GET <public-endpoint-url> or <localhost:<8080 or your preferred port which can be changed from config/env/>>
```

#### Fetch Data

```
  POST /api/records
```

#### Sample Request Body

```json
{
"startDate": "2016-01-26",
"endDate": "2018-02-02",
"minCount": 2700,
"maxCount": 3000
}
```

#### Expected Response

```json
{
    "code":0,
    "msg":"Success",
    "records":[
        {
            "key":"TAKwGc6Jr4i8Z487",
            "createdAt":"2017-01-28T01:22:14.398Z",
            "totalCount":2800
        },
        {
            "key":"NAeQ8eX7e5TEg7oH",
            "createdAt":"2017-01-27T08:19:14.135Z",
            "totalCount":2900
        }
    ]
}
```

## AWS - Public Endpoint URL of the deployed API
* A simple pipeline is created on AWS to propagate changes on the project automaticly.
* The public endpoint URL of the deployed API which is available for testing --> http://getirfetchapiwebapp-env.eba-i4mht8vn.us-east-2.elasticbeanstalk.com

## Test Results

Integration and unit tests are conducted. Here is the results;

```
Test Suites: 4 passed, 4 total
Tests:       15 passed, 15 total
Snapshots:   0 total
Time:        5.802 s, estimated 6 s
Ran all test suites.
```

### Unit

## License

MIT
