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
    npm run test
```
## How to Use

!! Beware, this API only accepts POST requests with JSON format.

### API Usage
Method --> POST /api/records


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

## Public Endpoint URL
This API is deployed to the AWS. You can also use this link --> http://getirfetchapiwebapp-env.eba-i4mht8vn.us-east-2.elasticbeanstalk.com

## License

MIT