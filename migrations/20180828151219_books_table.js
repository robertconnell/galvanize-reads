
exports.up = function(knex, Promise) {
    return knex.schema.createTable("books_table", table => {
        table.increments("id");
        table.text("BookTitle");
        table.text("BookGenre");
        table.text("BookDescription");
        table.text("BookCoverURL");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("books_table");
};