const router = require('express').Router();

const swaggerUi = require('swagger-ui-express');
const swaggerDocumnet = require('../../swagger.json');

router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(swaggerDocumnet));

module.exports = router;
