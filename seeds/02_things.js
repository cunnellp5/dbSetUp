
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('things').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('things').insert({
          human_id: 1,
          age: 27,
          hobby: 'smelling roses',
          interests: 'walks on the beach',
          favoriteQuote: 'algebraic!',
          faboriteNumber: 69
        }),
        knex('things').insert({
          human_id: 1,
          age: 27,
          hobby: 'smashing code',
          interests: 'creating abstractions on top of abstractions',
          favoriteQuote: 'i like turtles',
          faboriteNumber: 666
        }),
        knex('things').insert({
          human_id: 1,
          age: 27,
          hobby: 'crushing other in ping pong with the force of 1000 suns',
          interests: 'breathing',
          favoriteQuote: 'you said the sausages would be done in 3 min, 5 min ago!',
          faboriteNumber: 10
        }),
        knex('things').insert({
          human_id: 2,
          age: 12,
          hobby: 'making homemade salsa',
          interests: 'gardening',
          favoriteQuote: 'mmmmm mmmm goood',
          faboriteNumber: 53
        }),
        knex('things').insert({
          human_id: 2,
          age: 12,
          hobby: 'making homemade mayo',
          interests: 'pooping',
          favoriteQuote: 'D\'oh!',
          faboriteNumber: 42
        })
      ]);
    });
};
