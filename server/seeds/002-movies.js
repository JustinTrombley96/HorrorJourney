
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      // Inserts seed entries
      return knex('movies').insert([
        {title: 'Scream', image: 'https://i.ibb.co/vxsCPrq/Scream.jpg', rating: 0},
        {title: 'The Shining', image: 'https://i.ibb.co/TtQGmf2/Shining.jpg', rating: 0},
        {title: 'Hostel', image:'https://i.ibb.co/yyfKxpb/Hostel.jpg', rating: 0},
        {title: 'Halloween', image: 'https://i.ibb.co/Yh7B01p/Halloween.jpg', rating: 0}
      ]);
    });
};
