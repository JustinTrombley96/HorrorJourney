
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'test1@gmail.com', password: 'test1'},
        {email: 'test2@gmail.com', password: 'test2'},
        {email: 'test3@gmail.com', password: 'test3'}
      ]);
    });
};
