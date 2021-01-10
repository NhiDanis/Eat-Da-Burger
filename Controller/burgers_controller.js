// Import models connection.
const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// Create all our routes 
router.get("/", (req, res) => {
    burger.all((data) => {
      var hbsObject = {
        burger: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  


// Export routes for server.js to use.
    module.exports = router;