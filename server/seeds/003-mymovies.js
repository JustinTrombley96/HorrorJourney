
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('mymovies').del()
    .then(function () {
      // Inserts seed entries
      return knex('mymovies').insert([
        {title: 'Scream 1', rating: 5},
        {title: 'Scream 2', rating: 4},
        {title: 'Scream 3', rating: 3}
      ]);
    });
};
