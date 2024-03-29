const mongoose = require('mongoose');
const tarefasService = require('../services/tarefa.service');

const findAllTarefasController = async (req, res) => {
  const allTarefas = await tarefasService.findAllTarefaService();
  if (allTarefas.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nunhuma tarefa cadastrada' });
  }
  res.send(allTarefas);
};

const findByIdTarefaController = async (req, res) => {
  const id = req.params.id;
  const chosenTarefa = await tarefasService.findByIdTarefaService(id);
  if (!chosenTarefa) {
    res.status(206).send({ message: 'Tarefa não encontrada' });
  } else {
    res
      .status(200)
      .send({ message: 'Tarefa Encontrada com sucesso', data: chosenTarefa });
  }
};

const createTarefaController = async (req, res) => {
  const tarefa = req.body;
  const newTarefa = await tarefasService.createTarefaService(tarefa);
    res
      .status(201)
      .send({ message: 'Tarefa criada com sucesso', data: newTarefa });
};

const updateTarefaController = async (req, res) => {
  const id = req.params.id;
  const tarefaEdited = req.body;
  const updatedTarefa = await tarefasService.updateTarefaService(id, tarefaEdited);
  
  res.send({ message: 'Tarefa Atualizada com sucesso!', data: updatedTarefa });
};

const deleteTarefaController = async (req, res) => {
  const id = req.params.id;
  const chosenTarefa = await tarefasService.deleteTarefaService(id);  
  res.status(200).send({message: "Tarefa excluida com sucesso!"})
  
};

module.exports = {
  findAllTarefasController,
  findByIdTarefaController,
  createTarefaController,
  updateTarefaController,
  deleteTarefaController,
};
