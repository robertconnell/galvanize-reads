
exports.up = function(knex, Promise) {
    return knex.schema.createTable("authors_table", table => {
        table.increments("id");
        table.text("FirstName");
        table.text("LastName");
        table.text("Biography");
        table.text("PortraitURL");
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists("authors_table");
};
