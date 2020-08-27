
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'rowValue1', password: 'apple'},
        {email: 'rowValue2', password: 'apple'},
        {email: 'rowValue3', password: 'apple'}
      ]);
    });
};
