module.exports = function(sequelize, DataTypes) {
  var subscribers = sequelize.define("subscribers_tbl", {

    Firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },//End of Firstname

    Lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },//End of Lastname

    TelephoneNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },//End of TelephoneNumber

    Relationship: {
      type: DataTypes.INTEGER
    },//End of Relationship

    Emergency: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },//End of Emergency

    News: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },//End of News

    Reminders: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },//End of Reminders

    SchoolClosures: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });//End of variable Subscribers
  return subscribers;
};//End of module exports
