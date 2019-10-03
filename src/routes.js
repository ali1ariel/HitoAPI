const express = require('express');
const PersonController = require('./controllers/PersonController');

const routes = express.Router();


routes.post('/persons', PersonController.store);
routes.get('/persons', PersonController.index);
routes.get('/persons/:CPF', PersonController.show);
routes.delete('/persons/:CPF', PersonController.remove);
routes.put('/persons/:CPF', PersonController.edit);

module.exports = routes;
