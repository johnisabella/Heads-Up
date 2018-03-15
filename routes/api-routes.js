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
  app.post("/api/newSubscriber", function(req, res) {
    db.subscribers_tbl.create(req.body).then(function(dbsubscribers) {
    res.json(dbsubscribers);
    //console.log(req.body);

      //variable to require dotenv, .env file holds twilio creds
      //var key = require('dotenv').config()
      //variable to require twilio npm package, and twilio creds
      const client = require('twilio')(process.env.accountSid, process.env.authToken);

      client.messages.create(
        {
          to: req.body.TelephoneNumber,
          from: '+15714581011',
          body: 'Thank you for subscribing!!',
        },
        (err, message) => {
          console.log(message.sid);
        }
      );//End of client message create
    });//End of db.subscribers_tbl.create
    
  });//End of app.post newSubscriber

};//End of module exports function app
