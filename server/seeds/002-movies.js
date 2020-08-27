
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {title: 'Scream'},
        {title: 'Scream 2'},
        {title: 'Scream 3'}
      ]);
    });
};
