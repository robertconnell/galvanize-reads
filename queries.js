const database = require("./database-connection");

module.exports = {
    listBooks() {
        return database("books_table").select();
    },
    listBooksAuthors() {
        return database("books_authors_table")
            .join(
                "books_table",
                "books_authors_table.book_id",
                "=",
                "books_table.id"
            )
            .join(
                "authors_table",
                "books_authors_table.author_id",
                "=",
                "authors_table.id"
            )
            .select({
                book_id: "books_table.id",
                title: "books_table.BookTitle",
                first_name: "authors_table.FirstName",
                last_name: "authors_table.LastName",
                genre: "books_table.BookGenre",
                cover_url: "books_table.BookCoverURL"
            });
    },
    listAuthors() {
        return database("authors_table").select();
    }
};
//     read(id) {
//         return database("resolution")
//             .select()
//             .where("id", id)
//             .first();
//     },
//     create(resolution) {
//         return database("gmemory1")
//             .from("resolution")
//             .insert(resolution)
//             .returning("*")
//             .then(record => record[0]);
//     },
//     update(id, resolution) {
//         return database("resolution")
//             .update(resolution)
//             .where("id", id)
//             .returning("*")
//             .then(record => record[0]);
//     },
//     delete(id) {
//         return database("resolution")
//             .delete()
//             .where("id", id);
//     }
// };