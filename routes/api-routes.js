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
  // GET API route that returns one messages
  app.get("/api/message/:id", function(req, res) {
    db.messages_tbl.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function(result) {
        res.json(result);
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

  app.post("/api/alerts", function(req, res) {
    console.log(req.body);
    console.log(req.body.id);
    console.log(req.body.Message);
    if(req.body.id == 1){
        console.log("The ID is 1");
        var userList =[];
          db.subscribers_tbl.findAll({
            where: {
              EmergencyAlerts: 1
            }
          }).then(function(result) {
            for(var i = 0; i < result.length; i++){
              //Variable set client to twilio npm package and accountSid, and authToken which are kept in an .env file
              const client = require('twilio')(process.env.accountSid, process.env.authToken);
              //Create text message
                client.messages.create(
                  {
                    to: result[i].TelephoneNumber,
                    from: '+15714581011',
                    body: req.body.Message,
                  },
                  (err, message) => {
                  console.log(message.sid);
                });//End of client message create
              userList.push(result[i].TelephoneNumber);
            };
            console.log(userList);
          });
    }//End of if req.body.id == 1

    if(req.body.id == 2){
        console.log("The ID is 2");
        var userList =[];
          db.subscribers_tbl.findAll({
            where: {
              CampusNewsAlerts: 1
            }
          }).then(function(result) {
            for(var i = 0; i < result.length; i++){
              //Variable set client to twilio npm package and accountSid, and authToken which are kept in an .env file
              const client = require('twilio')(process.env.accountSid, process.env.authToken);
              //Create text message
                client.messages.create(
                  {
                    to: result[i].TelephoneNumber,
                    from: '+15714581011',
                    body: req.body.Message,
                  },
                  (err, message) => {
                  console.log(message.sid);
                });//End of client message create
              userList.push(result[i].TelephoneNumber);
            };
            console.log(userList);
          });
    }//End of if req.body.id == 2

    if(req.body.id == 3){
        console.log("The ID is 3");
        var userList =[];
          db.subscribers_tbl.findAll({
            where: {
              AreaNewsAlerts: 1
            }
          }).then(function(result) {
            for(var i = 0; i < result.length; i++){
              //Variable set client to twilio npm package and accountSid, and authToken which are kept in an .env file
              const client = require('twilio')(process.env.accountSid, process.env.authToken);
              //Create text message
                client.messages.create(
                  {
                    to: result[i].TelephoneNumber,
                    from: '+15714581011',
                    body: req.body.Message,
                  },
                  (err, message) => {
                  console.log(message.sid);
                });//End of client message create
              userList.push(result[i].TelephoneNumber);
            };
            console.log(userList);
          });
    }//End of if req.body.id == 3

    if(req.body.id == 4){
        console.log("The ID is 4");
        var userList =[];
          db.subscribers_tbl.findAll({
            where: {
              SchoolClosureAlerts: 1
            }
          }).then(function(result) {
            for(var i = 0; i < result.length; i++){
              //Variable set client to twilio npm package and accountSid, and authToken which are kept in an .env file
              const client = require('twilio')(process.env.accountSid, process.env.authToken);
              //Create text message
                client.messages.create(
                  {
                    to: result[i].TelephoneNumber,
                    from: '+15714581011',
                    body: req.body.Message,
                  },
                  (err, message) => {
                    console.log(message.sid);
                  });//End of client message create
              userList.push(result[i].TelephoneNumber);
            };
            console.log(userList);
          });
    }//End of if req.body.id == 4

    function sendMessage() {
      //Variable set client to twilio npm package and accountSid, and authToken which are kept in an .env file
      const client = require('twilio')(process.env.accountSid, process.env.authToken);
      //Create text message
        client.messages.create(
          {
            to: result[i].TelephoneNumber,
            from: '+15714581011',
            body: req.body.Message,
          },
          (err, message) => {
            console.log(message.sid);
          });//End of client message create
      };//End of sendMessage function

  });//End of Post /api/alerts

  //API Route to update messages with data to be sent out.
  app.put("/api/message", function(req, res) {
    db.messages_tbl.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
      .then(function(result) {
        res.json(result);
      });
  });
};//End of module exports function app
