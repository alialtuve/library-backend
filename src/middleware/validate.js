const { Book }  = require('../models');


function getBookAvailability (bookId) {
    return new Promise(async function(resolve, reject) {
        const res = await Book.findById(bookId);
        resolve(res);
    })
};

module.exports = {
    getBookAvailability,
};