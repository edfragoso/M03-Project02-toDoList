const mongoose = require('mongoose');

const TarefaSchema = new mongoose.Schema({
    tarefa: {
        type: String,
        require: true,
    },
    descricao: {
        type: String,
        require: true,
    },
    situacao: {
        type: Boolean,
        require: true,
    },
});

const Tarefas = mongoose.model('tarefas', TarefaSchema);

module.exports = Tarefas;
