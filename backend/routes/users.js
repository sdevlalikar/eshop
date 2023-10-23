const express = require("express");
const router = express.Router();
const cors = require("cors");
const db = require("../database/db");
const userController = require("../controllers/userController");

// Get all users
router.get("/", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) console.log(err);
    else res.json(results);
  });
});

router.put("/:userId", userController.update_user);

router.options('*', cors())
module.exports = router;
