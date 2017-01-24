const bcrypt = require ('bcrypt');


exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM human; ALTER SEQUENCE human_id_seq RESTART WITH 3')
    .then(function () {
      return Promise.all([
        knex('human').insert({
          id: 1,
          email: 'phil@phil.com',
          password: bcrypt.hashSync('bandana', 10),
        }),
        knex('human').insert({
          id: 2,
          email: 'jack@silly.com',
          password: bcrypt.hashSync('scoop', 10)
        }),

      ]);
    });
};
