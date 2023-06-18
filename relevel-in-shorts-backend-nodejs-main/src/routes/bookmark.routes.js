const express = require("express");
const router = express.Router();
const BookMarkController = require('../controllers/bookmark.controller');
const auth = require("../middleware/auth.middleware")

// Create routes for Bookmark here
router.post('/add', auth, BookMarkController.addBookMark);

//create route for getBookMarkByUserId

//create route for deleteBookMarkById

module.exports = router;