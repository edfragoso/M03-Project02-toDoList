/* const { v4: uuidv4 } = require('uuid'); // Gerador de ID exclusivo */
const Tarefas = require('../models/Tarefas');

// Buscando todas tarefas da lista
const findAllTarefaService = async () => {
  const tarefas = await Tarefas.find();
  return tarefas;
};

// Buscando por ID
const findByIdTarefaService = async (id) => {
  const oneTarefa = await Tarefas.findById(id);
  return oneTarefa;
};

// Criando nova tarefa
const createTarefaService = async (newTarefa) => {
  const createdTarefa = await Tarefas.create(newTarefa);
  return createdTarefa;
};

// Atualizando tarefa
const updateTarefaService = async (id, tarefaEdited) => {
  const updateTarefa = await Tarefas.findByIdAndUpdate(id, tarefaEdited).setOptions({returnOriginal: false})
  
  return tarefaEdited;
};

// Deletar tarefa
const deleteTarefaService = async (id) => {
  return await Tarefas.findByIdAndDelete(id);
};

module.exports = {
  findAllTarefaService,
  findByIdTarefaService,
  createTarefaService,
  updateTarefaService,
  deleteTarefaService,
};
