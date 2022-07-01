const route = require('express').Router();
const controllerTarefas = require('../controllers/tarefa.controller');

route.get('/all-tarefas', controllerTarefas.findAllTarefasController);
route.get('/tarefa/:id', controllerTarefas.findByIdTarefaController);
route.post('/create-tarefa', controllerTarefas.createTarefaController);
route.put('/update-tarefa/:id', controllerTarefas.updateTarefaController);
route.delete('/delete-tarefa/:id', controllerTarefas.deleteTarefaController);
 


module.exports = route;
