'use strict';
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define('Task', {
    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    completada: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },{
    sequelize,
    modelName: 'Task',
  });
  return Task;
};