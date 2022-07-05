const express = require('express');
const port = 3000;
const app = express();
const cors = require('cors');
const routes = require('./src/routes/tarefa.route');
const connection = require('./src/database/database');
const swaggerRoute = require('./src/routes/swagger.route');

connection();
app.use(express.json());
app.use(cors());

app.use('/tarefas', routes);
app.use('/api', swaggerRoute)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
