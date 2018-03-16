module.exports = function(sequelize, DataTypes) {
  var messages = sequelize.define("messages_tbl", {

    Message: {
      type: DataTypes.STRING,
      allowNull: false
    },//End of Firstname

  });//End of variable Subscribers
  return messages;
  };//End of module exports
