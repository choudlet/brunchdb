
exports.up = function(knex, Promise) {
  return knex.schema.createTable('brunch_review', table => {
    table.increments();
    table.string('restaurant_name').notNullable();
    table.date('date_of_visit').notNullable();
    table.string('meal_name').notNullable();
    table.decimal('total_cost');
    table.integer('review_score');
    table.boolean('will_return');
    table.boolean('bottomless_drinks');
    table.string('notes');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('brunch_review');
};
