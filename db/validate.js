var Joi = require('joi');

var schema = Joi.object().keys({
  restaurant_name: Joi.string().required(),
  date_of_visit: Joi.date().iso().required(),
  meal_name: Joi.string().required(),
  total_cost: Joi.number().precision(2).allow(''),
  review_score: Joi.number().min(1).max(10).allow(''),
  will_return: Joi.boolean().default(undefined),
  bottomless_drinks: Joi.boolean().default(undefined),
  notes: Joi.string().allow('')
});

module.exports = schema;
