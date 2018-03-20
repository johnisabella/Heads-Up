var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/messages", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/messages.html"));
  });

  app.get("/adminlogin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/adminlogin.html"));
  });

};//End of module exports function app
