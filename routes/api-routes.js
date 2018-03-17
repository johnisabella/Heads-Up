var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET API route that returns all registrations
  app.get("/api/registration", function(req, res) {
    db.subscribers_tbl.findAll({}).then(function(result) {
      return res.json(result);
    });
  });
  // GET API route that returns all messages
  app.get("/api/message", function(req, res) {
    db.messages_tbl.findAll({}).then(function(result) {
      return res.json(result);
    });
  });
  // POST API route that commits new subscribers and sends them an initial test message
  app.post("/api/newSubscriber", function(req, res) {
    db.subscribers_tbl.create(req.body).then(function(dbsubscribers) {
      res.json(dbsubscribers);

      //Variable set client to twilio npm package and accountSid, and authToken which are kept in an .env file
      const client = require('twilio')(process.env.accountSid, process.env.authToken);
      //Create text message
        client.messages.create(
          {
            to: req.body.TelephoneNumber,
            from: '+15714581011',
            body: 'Thank you for subscribing!!',
          },
          (err, message) => {
          console.log(message.sid);
        });//End of client message create
    });//End of db.subscribers_tbl.create
  });//End of app.post newSubscriber
  
};//End of module exports function app
