
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('mymovies').del()
    .then(function () {
      // Inserts seed entries
      return knex('mymovies').insert([]);
    });
};
