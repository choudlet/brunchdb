var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var moment = require('moment');
var Joi = require('joi');
var schema = require('../db/validate.js');
router.get('/', function(req, res, next) {
  res.render('create');
});

router.post('/', function(req, res, next){
  Joi.validate(req.body, schema, function(err, value){
    if(err) {
      res.send(err);
    } else {
      if(req.body.total_cost === '') {
        req.body.total_cost = null;
      }
      if(req.body.review_score === '') {
        req.body.review_score = null;
      }
      knex('brunch_review')
      .insert({restaurant_name: req.body.restaurant_name, date_of_visit: req.body.date_of_visit, meal_name: req.body.meal_name, total_cost: req.body.total_cost, review_score: req.body.review_score, will_return: req.body.will_return, bottomless_drinks: req.body.bottomless_drinks, notes: req.body.notes})
      .returning('id')
      .then((id) => {
      res.redirect(`/viewsingle/${id}`);
        });
    }
  });


});


module.exports = router;
