const {Router} = require('express')

const taskController = require('../controllers/taskController')

module.exports = function(app) {
  const apiRoutes = express.Router();
  apiRoutes.get('/tasks', taskController.allTasks);
  apiRoutes.post('/tasks', taskController.newTask);
  apiRoutes.post('/tasks/delete', taskController.deleteTask);


  const homepage = express.Router();
}