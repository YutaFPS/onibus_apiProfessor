const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para CRIAR (Create) uma linha
router.post('/usuario', userController.createUser);

//Rota para LER (Read) todos os registros de linha
router.get('/usuario', userController.getAlluser);

//Rota para LER (Read) uma linha pelo ID
router.get('/usuario/:id', userController.getUserById);

//Rota para ATUALIZAR (Update) uma linha pelo ID
router.put('/usuario/:id', userController.updateuser);

//Rota para DELETAR (Delete) uma linha pelo ID
router.delete('/usuario/:id', userController.deleteuser);

module.exports = router;