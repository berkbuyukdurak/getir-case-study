const Joi = require('joi').extend(require('@joi/date'));

const recordSchemaPostRequestValidator = Joi.object({
    startDate: Joi.date().format('YYYY-MM-DD').required().less(Joi.ref("endDate")),
    endDate: Joi.date().format('YYYY-MM-DD').required(),
    minCount: Joi.number().positive().allow(0).required().integer().less(Joi.ref("maxCount")),
    maxCount: Joi.number().required().positive().integer(),
})

module.exports = {
    recordSchemaPostRequestValidator,
}