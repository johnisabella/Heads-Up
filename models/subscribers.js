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
      type: DataTypes.STRING
    },//End of Relationship

    EmergencyAlerts: {
      type: DataTypes.STRING,
      defaultValue: false
    },//End of Emergency

    CampusNewsAlerts: {
      type: DataTypes.STRING,
      defaultValue: false
    },//End of News

    AreaNewsAlerts: {
      type: DataTypes.STRING,
      defaultValue: false
    },//End of Reminders

    SchoolClosureAlerts: {
      type: DataTypes.STRING,
      defaultValue: false
    }
  });//End of variable Subscribers
  return subscribers;
};//End of module exports
