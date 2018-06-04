//Create a Taco model with columns for "taco_name" (DataTypes.STRING) amd "devoured" (DataTypes.BOOLEAN).

module.exports = function (sequelize, DataTypes) {
    var Taco = sequelize.define("Taco", {
        taco_name: {
            type: DataTypes.STRING,
            validate: { notNull: true },
            validate: { len: [1] }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Taco;
};

