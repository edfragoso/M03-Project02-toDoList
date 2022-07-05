const route = require('express').Router();
const controllerTarefas = require('../controllers/tarefa.controller');
const { validId,validObjectBody } = require('../middlewares/tarefa.middleware');

route.get('/', controllerTarefas.findAllTarefasController);
route.get('/:id',validId, controllerTarefas.findByIdTarefaController);
route.post('/', validObjectBody, controllerTarefas.createTarefaController);
route.put('/:id', validId, validObjectBody, controllerTarefas.updateTarefaController);
route.delete('/:id',validId, controllerTarefas.deleteTarefaController);
 


module.exports = route;
