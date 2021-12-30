const mongoose = require('mongoose');
const recordModel = require('../../models/record');
const mockingoose = require('mockingoose');



const dummy_data = [
    {
        _id: new mongoose.Types.ObjectId(),
        counts: [10, 11, 12],
        createdAt: Date.now(),
        key: "key1",
        value: "value1",
    },
    {
        _id: new mongoose.Types.ObjectId(),
        counts: [20, 21, 22],
        createdAt: Date.now(),
        key: "key2",
        value: "value2",
    },
    {
        _id: new mongoose.Types.ObjectId(),
        counts: [30, 31, 32],
        createdAt: Date.now(),
        key: "key3",
        value: "value3",
    },
]

describe('Testing Record model', () => {
    it("Successful empty aggregate return.", () => {
        mockingoose(recordModel).toReturn(dummy_data, 'aggregate');
        return recordModel.aggregate([]).then(records => {
            expect(JSON.parse(JSON.stringify(dummy_data))).toMatchObject(dummy_data)
        })
    });
});