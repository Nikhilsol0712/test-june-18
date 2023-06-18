//import bookmark model here

const addBookMark = (req, res) => {
    //add bookmark api logic here
};

const getBookMarkByUserId = (req, res) => {
    //get bookmark api logic here by userId
};

const deleteBookMarkById = (req, res) => {
    //get bookmark api logic here by _id
};

const BookMarkController = {
    addBookMark,
    getBookMarkByUserId,
    deleteBookMarkById
};

module.exports = BookMarkController;