var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var moment = require('moment');
/* GET home page. */
router.get('/', function(req, res, next) {
    return knex('brunch_review').select().orderBy('id').then((rows)=>{
      for (i=0; i<rows.length; i++){
        if (rows[i].total_cost !== null) {
          rows[i].total_cost = '$' + rows[i].total_cost;
        }
        rows[i].date_of_visit = moment(rows[i].date_of_visit).format("MMM Do YY");
    }
      console.log(rows);
      res.render('viewall', {rows});
    });
  });



module.exports = router;
