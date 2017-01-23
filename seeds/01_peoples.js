
exports.seed = function(knex, Promise) {
  return knex('human').del()
    .then(function () {
      return Promise.all([
        knex('human').insert({
          id: 1,
          email: 'phil@phil.com',
          password: 'bandana'
        }),
        knex('human').insert({
          id: 2,
          email: 'jack@silly.com',
          password: 'scoop'
        }),

      ]);
    });
};
