var models = require('../models');

exports.allTasks = function (req, res, next) {
  models.Task.findAll({include: [{model: models.Tag}]}).then(function(tasks){
    res.status(200).json({
      tasks
    })
  })
}

exports.newTask = function (req, res, next) {
    models.Task.create({description: req.body.description, status: ""})
    .then(function() {
      res.redirect('/');
    });
}

exports.deleteTask = function (req, res, next) {
  models.Task.find({where: {id: req.body.id}}).then(function(task) {
    return task.destroy();
  })
}









