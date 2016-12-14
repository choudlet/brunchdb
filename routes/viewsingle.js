var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var moment = require('moment');
var Joi = require('joi');
var schema = require('../db/validate.js');
/* GET viewsingle page. */
router.get('/:id', function(req, res, next) {
  return knex('brunch_review').select().where('id', req.params.id).then((row) => {
    if(row[0].total_cost !== null) {
      row[0].total_cost = '$' + row[0].total_cost;
    }
    row[0].date_of_visit = moment(row[0].date_of_visit).format("MMM Do YY");
    console.log(row);
    res.render('viewsingle',{row});
  });
});

 router.delete('/:id', function(req,res,next) {
  knex('brunch_review').select().where('id', req.params.id).del().then(()=> {
    res.redirect('/viewall');
   });

 });

router.get('/:id/edit', function(req,res,next) {
  knex('brunch_review').select().where('id', req.params.id).then((row) => {
  row[0].date_of_visit = moment(row[0].date_of_visit).format('YYYY[-]MM[-]DD');
    res.render('edit',{row});
});
});

router.put('/:id', (req,res) => {
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
    }
  knex('brunch_review').where('id', req.params.id).update(req.body)
  .then(()=>{
    res.redirect(`/viewsingle/${req.params.id}`);
  });
});
});
module.exports = router;
