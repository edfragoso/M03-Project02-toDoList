const mongoose = require('mongoose');

const validId = async (req, res, next) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res
            .status(400)
            .send({ message: "Chave de identificação 'ID' inválida ou não existe" });
    }
    next();
};

const validObjectBody = (req, res, next) => {
    const tarefa = req.body;
    if (!tarefa || !tarefa.tarefa || !tarefa.descricao) {
        return res.send({ message: 'Todos os campos devem ser preenchidos' });
    }
    if (typeof tarefa.situacao !== 'boolean' || tarefa.situacao === '') {
        res
            .status(400)
            .send({ message: 'Campo situação dever ser do tipo boolean' });
    }
    next();
};


module.exports = {
    validId,
    validObjectBody,
};
