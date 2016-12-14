
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('brunch_review').del()
  .then(function () {return knex.raw('TRUNCATE brunch_review; ALTER SEQUENCE brunch_review_id_seq restart with 11;');})
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('brunch_review').insert({id:1, restaurant_name: 'Tamayo', date_of_visit: "2016-11-15", meal_name: "Bottomless Brunch", total_cost: 49.00, review_score: 9, will_return: true, bottomless_drinks: true, notes: "Awesome brunch with lots of things to choose from! Served bottomless. Great service. Loved the eggs benedict"}),
        knex('brunch_review').insert({id:2, restaurant_name: '4 Friends Kitchen', date_of_visit: "2016-09-23", meal_name: "Chicken and Grits", total_cost: 13.66, review_score: 8, will_return: true, bottomless_drinks: false, notes: "Best grits of my life in Stapleton. Kind of a hike but totally worth it"}),
        knex('brunch_review').insert({id:3, restaurant_name: 'Jelly', date_of_visit: "2016-07-05", meal_name: "Eggs Benedict", total_cost: 16.25, review_score: 6, will_return: false, bottomless_drinks: true, notes: "Overrated. I didn't really like the donut bites which people are obsessed about. Long wait."}),
        knex('brunch_review').insert({id:4, restaurant_name: 'Snooze', date_of_visit: "2015-08-26", meal_name: "Chilaquiles Benedict", total_cost: 32.87, review_score: 7, will_return: true, bottomless_drinks: false, notes: "Long wait at Union Station but the meal was really delicious."}),
        knex('brunch_review').insert({id:5, restaurant_name: 'Syrup City Park', date_of_visit: "2015-07-22", meal_name: "Breakfast Burrito", total_cost: 25.11, review_score: 4, will_return: false, bottomless_drinks: false, notes: "Overrated and too expensive. Service was slow"}),
        knex('brunch_review').insert({id:6, restaurant_name: 'Zengo', date_of_visit: "2016-10-02", meal_name: "Bottomless Brunch", total_cost: 51.45, review_score: 7, will_return: false, bottomless_drinks: true, notes: "Another bottomless brunch. Seaweed benedict was nasty. Drinks were really really slow"}),
        knex('brunch_review').insert({id:7, restaurant_name: 'Gozo', date_of_visit: "2016-12-08", meal_name: "Chicken Sandwich", total_cost: 13.23, review_score: 9, will_return: true, bottomless_drinks: false, notes: "Quick service and awesome food. Really chill ambience."}),
        knex('brunch_review').insert({id:8, restaurant_name: 'Sputnik', date_of_visit: "2015-12-02", meal_name: "Southern Bowl", total_cost: 16.23, review_score: 9, will_return: true, bottomless_drinks: false, notes: "Very cheap and delicious food. The mimosas really snuck up on me"}),
        knex('brunch_review').insert({id:9, restaurant_name: 'Sams #3 Diner', date_of_visit: "2016-05-12", meal_name: "Mac and Cheese Burrito", total_cost: 23.23, review_score: 6, will_return: false, bottomless_drinks: false, notes: "Just basic. Really slow service and mimosas were expensive"}),
        knex('brunch_review').insert({id:10, restaurant_name: 'City O City', date_of_visit: "2015-11-12", meal_name: "City Breakfast", total_cost: 10.21, review_score: 8, will_return: true, bottomless_drinks: false, notes: "Super Easy to get to. City Breakfast is cheap and delicious on the weekends."}),
      ]);
    });
};
