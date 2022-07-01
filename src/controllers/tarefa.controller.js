const mongoose = require('mongoose');
const tarefasService = require('../services/tarefa.service');

const findAllTarefasController = async (req, res) => {
  const tarefas = await tarefasService.findAllTarefaService();
  if (tarefas.length == 0) {
    return res
      .status(404)
      .send({ message: 'Não existe nunhuma tarefa cadastrada' });
  }
  res.send(tarefas);
};

const findByIdTarefaController = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(400)
      .send({ message: "Chave de identificação 'ID' inválida ou não existe" });
  }

  const tarefa = await tarefasService.findByIdTarefaService(id);

  if (!tarefa) {
    res.status(206).send({ message: 'Tarefa não encontrada' });
  } else {
    res
      .status(200)
      .send({ message: 'Tarefa Encontrada com sucesso', data: tarefa });
  }
};

const createTarefaController = async (req, res) => {
  const tarefa = req.body;
  if (!tarefa || !tarefa.tarefa || !tarefa.descricao) {
    return res.send({ message: 'Todos os campos devem ser preenchidos' });
  }
  if (typeof tarefa.situacao !== 'boolean' || tarefa.situacao === '') {
    res
      .status(400)
      .send({ message: 'Campo situação dever ser do tipo boolean' });
  } else {
    const newTarefa = await tarefasService.createTarefaService(tarefa);
    res
      .status(201)
      .send({ message: 'Tarefa criada com sucesso', data: newTarefa });
  }
};

const updateTarefaController = async (req, res) => {
  const id = req.params.id;
  const tarefaEdited = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }
  const chosenTarefa = await tarefasService.findByIdTarefaService(id);
  if (!chosenTarefa) {
    return res.status(206).send({ message: 'Tarefa não encontrada' });
  }
  if (!tarefaEdited || !tarefaEdited.tarefa || !tarefaEdited.descricao) {
    return res.send({ message: 'Todos os campos devem ser preenchidos' });
  }
  if (
    typeof tarefaEdited.situacao !== 'boolean' ||
    tarefaEdited.situacao === ''
  ) {
    res
      .status(400)
      .send({ message: 'Campo situação dever ser do tipo boolean' });
  }
  const  updatedTarefa = await tarefasService.updateTarefaService(id, tarefaEdited)
  res.send({ message: 'Tarefa Atualizada com sucesso!', data: updatedTarefa });
};

const deleteTarefaController = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'ID inválido!' });
  }
  const chosenTarefa = await tarefasService.deleteTarefaService(id);
  if (!chosenTarefa) {
    return res.status(206).send({message: "Tarefa não encontrada"})
  } 
  
  res.status(20).send({message: "Tarefa excluida com sucesso!"})
  
};

module.exports = {
  findAllTarefasController,
  findByIdTarefaController,
  createTarefaController,
  updateTarefaController,
  deleteTarefaController,
};
