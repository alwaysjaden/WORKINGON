const router = require("express").Router();
const bookRoutes = require("./books");
const investorRoute = require("./books");

// Book routes
router.use("/books", bookRoutes);
router.use("/inverstors", investorRoute);

module.exports = router;
