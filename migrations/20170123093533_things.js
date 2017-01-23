
exports.up = function(knex, Promise) {
  return knex.schema.createTable('things', function(table){
    table.increments();
    table.float('age');
    table.string('hobby');
    table.string('interests');
    table.string('favoriteQuote');
    table.integer('faboriteNumber');
    table.integer('human_id').unsigned();
    table.foreign('human_id').references('human.id');
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('things')
};
