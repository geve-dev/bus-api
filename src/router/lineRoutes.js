const express = require('express');
const router = express.Router();
const lineController = require('../controllers/lineCtrontroller');

// Rota para CRIAR (Create) uma line
router.post('/bus-line', lineController.createLine);

//Rota para LER (Read) todos os registros de line
router.get('/bus-line', lineController.getAllLine);

//Rota para LER (Read) uma line pelo ID
router.get('/bus-line/:id', lineController.getLineById);

//Rota para ATUALIZAR (Update) uma line pelo ID
router.put('/bus-line/:id', lineController.updateLine);

//Rota para DELETAR (Delete) uma line pelo ID
router.delete('/bus-line/:id', lineController.deleteLine);

module.exports = router;