const router = require("express").Router();
const searchContorller = require("../../controllers/search_controller");

// Matches with "/api/books"
router.route("/investors")
  .get(searchContorller.search)

// Matches with "/api/books/:id"

module.exports = router;
