module.exports = function(sequelize, DataTypes) {
  var messages = sequelize.define("messages_tbl", {

    Title: {
      type: DataTypes.STRING,
      allowNull: false
    },//End of Title
    Message: {
      type: DataTypes.STRING,
      allowNull: false
    },//End of Message

  });//End of variable Subscribers
  return messages;
  };//End of module exports
