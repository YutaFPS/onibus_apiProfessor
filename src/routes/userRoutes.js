const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para CRIAR (Create) uma linha
router.post('/user', userController.createUser);

//Rota para LER (Read) todos os registros de linha
router.get('/user', userController.getAlluser);

//Rota para LER (Read) uma linha pelo ID
router.get('/user/:id', userController.getUserById);

//Rota para ATUALIZAR (Update) uma linha pelo ID
router.put('/user/:id', userController.updateuser);

//Rota para DELETAR (Delete) uma linha pelo ID
router.delete('/user/:id', userController.deleteuser);

module.exports = router;