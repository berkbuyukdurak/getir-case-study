const mockingoose = require('mockingoose');
const mongoose = require('mongoose');
const recordService = require('../../services/records.service')
const recordModel = require('../../models/record');

const test_data_before_processed = [
    {
        _id: new mongoose.Types.ObjectId(),
        key: 'eBsfCJnz',
        value: 'nvUElxtcpngx',
        createdAt: '2016-12-15T23:55:04.926Z',
        counts: [ 93, 82 ]
      },
      {
        _id: new mongoose.Types.ObjectId(),
        key: 'enolSIKn',
        value: 'dsCwBTXHJmiE',
        createdAt: '2016-12-15T22:37:27.095Z',
        counts: [ 849, 1692, 1288 ]
        },
]
const test_data_after_processed = [
    {
        key: test_data_before_processed[0].key,
        createdAt: test_data_before_processed[0].createdAt,
        totalCount: test_data_before_processed[0].counts.reduce((a, b) => a + b, 0)
    },
    {
        key: test_data_before_processed[1].key,
        createdAt: test_data_before_processed[1].createdAt,
        totalCount: test_data_before_processed[1].counts.reduce((a, b) => a + b, 0)
    }
]

describe('Testing records service', () => {
    it("Data should be successfully processed.", () => {
        mockingoose(recordModel).toReturn(test_data_after_processed, 'aggregate');
        return recordService.filterFetchedData({
            "startDate": "2015-01-26",
            "endDate": "2018-05-05",
            "minCount": 10,
            "maxCount": 3000
        }).then(records =>{
            expect(JSON.parse(JSON.stringify(records))).toMatchObject(test_data_after_processed)
        })
    })
})