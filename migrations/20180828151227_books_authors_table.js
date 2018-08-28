
exports.up = function(knex, Promise) {
    return knex.schema.createTable("books_authors_table", table => {
        table.increments("id");
        table.integer("author_id");
        table.integer("book_id");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("books_authors_table");
};