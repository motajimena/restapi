'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  persona.init({
    name: DataTypes.STRING,
    casa: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'persona',
  });
  return persona;
};