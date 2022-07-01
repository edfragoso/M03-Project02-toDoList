const mongoose = require('mongoose');

const connection = () => {
    mongoose
        .connect('mongodb://localhost:27017/tarefas-db', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log('MONGODB CONNECTION OK')).catch((err) => console.log(`Erro ao conctar com o Mongodb, erro: ${err}`));
};

module.exports = connection;
