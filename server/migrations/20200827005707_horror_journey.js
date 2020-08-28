
exports.up = function(knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments()
            tbl.string('email').notNullable().unique()
            tbl.string('password').notNullable()
        })
        .createTable('movies', tbl => {
            tbl.increments()
            tbl.string('title').notNullable().unique()
            tbl.string('image').notNullable().unique()
            tbl.integer('rating')
        })
        .createTable('mymovies', tbl => {
            tbl.increments()
            tbl.string('title').notNullable().unique()
            tbl.string('image')
            tbl.integer('rating')
        })

        // Add a limit on the Rating to only work from 1 - 5
        
  
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('mymovies')
        .dropTableIfExists('movies')
        .dropTableIfExists('users')
  
};
