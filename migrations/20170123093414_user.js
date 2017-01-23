
exports.up = function(knex, Promise) {
  return knex.schema.createTable('human', function(table){
    table.increments();
    table.string('email');
    table.string('password');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('human');
};
