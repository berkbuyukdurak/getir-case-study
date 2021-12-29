const Record = require("../models/record");


/**
 * This function filters the data with aggregation operation.
 * It returns computed results.
 * @param {Object} query 
 */
module.exports.filterFetchedData = (query) => {
    // Getting request body for the service function
    const startDate = new Date(query.startDate);
    const endDate = new Date(query.endDate);
    const minCount = query.minCount;
    const maxCount = query.maxCount;

    const aggrQuery = [
        {
            $match: {
                createdAt: {$lt: endDate, $gte: startDate},
            }
        },
        {
            $unwind: '$counts'
        },
        {
            $group: {
                _id: '$key',
                key: { $first: '$key' },
                createdAt: { $first: '$createdAt' },
                totalCount: { $sum: '$counts' }
            }
        },
        {
            $match: {
                totalCount: {$lt: maxCount, $gte: minCount}
            }
        },
        {
            $project: { _id: 0 }
        },
        {
            $sort: { totalCount: 1 }
        }
    ];
    return Record.aggregate(aggrQuery)
}