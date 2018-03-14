var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/api/", function(req, res) {
    db.subscribers_tbl.findAll({}).then(function(result) {
      return res.json(result);
    });
  });

};//End of module exports function app
