const { Book, RequestedBook }  = require('../models');


function getBookAvailability (bookId) {
    return new Promise(async function(resolve, reject) {
        const res = await Book.findById(bookId);
        resolve(res);
    })
};

function searchBorrowed (bookId, userId) {
    return new Promise(async function(resolve, reject) {
        const res = await RequestedBook.countDocuments({
            user: userId,
            book: bookId,
            status: false,
        });
        resolve(res);
    })
};


module.exports = {
    getBookAvailability,
    searchBorrowed,
};