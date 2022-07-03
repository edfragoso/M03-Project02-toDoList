const route = require('express').Router();
const controllerTarefas = require('../controllers/tarefa.controller');
const { validId,validObjectBody } = require('../middlewares/tarefa.middleware');

route.get('/all-tarefas', controllerTarefas.findAllTarefasController);
route.get('/tarefa/:id',validId, controllerTarefas.findByIdTarefaController);
route.post('/create-tarefa', validObjectBody, controllerTarefas.createTarefaController);
route.put('/update-tarefa/:id', validId, validObjectBody, controllerTarefas.updateTarefaController);
route.delete('/delete-tarefa/:id',validId, controllerTarefas.deleteTarefaController);
 


module.exports = route;
