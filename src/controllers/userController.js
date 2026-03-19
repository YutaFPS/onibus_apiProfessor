const UserModel = require('../models/userModel');

// CREATE
const createUser = async (req, res) => {
  try {
    const { nome, linha_favorita } = req.body;

    const userData = {
      nome,
      linha_favorita
    };

    const newUser = await UserModel.create(userData);
    
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar o usuário', error: error.message });
  }
};


// READ (All)
const getAlluser = async (req, res) => {
  try {
    const users = await UserModel.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar os usuários', error: error.message });
  }
};

// READ (id)
const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserModel.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }
    res.status(200).json(user);

  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar o usuário', error: error.message });
  }
};

// UPDATE
const updateuser= async (req, res) => {
  try {
    const { id } = req.params;
    const {linha_favorita } = req.body;

    // Verificamos se a linha existe antes de atualizar
    const lineExists = await lineModel.findById(id);
    if (!lineExists) {
      return res.status(404).json({ message: 'Linha de onibus não encontrada' });
    }

    const updatedData = { linha_favorita };
    const updatedLine = await userModel.update(id, updatedData);

    res.status(200).json(updatedLine);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar a linha', error: error.message });
  }
};

// DELETE
const deleteuser = async (req, res) => {
  try {
    const { id } = req.params;
    const affectedRows = await userModel.remove(id);

    if (affectedRows === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }
    
    // 204 = No Content (sucesso, mas não retorna nada, precisa adicionar mensagem)
    res.status(204).send(); 
  } catch (error) {
    res.status(500).json({ message: 'Erro ao desfavoritar o usuário.', error: error.message });
  }
};

//exporta as funções
module.exports = {
  createUser,
  getAlluser,
  getUserById,
  updateuser,
  deleteuser
};