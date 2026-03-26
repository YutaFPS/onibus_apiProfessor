const pool = require('../config/db');

const create = async (data) => {
const { nome, linha_favorita } = data;
const sql = 'INSERT INTO usuario (nome, linha_favorita) VALUES ( ?, ?)';
  
  const [result] = await pool.execute(sql, [nome, linha_favorita]);
  return { id: result.insertId, ...data };
};

// Função para buscar todoas os usuarios
const findAll = async () => {
  const [rows] = await pool.execute('SELECT * FROM usuario');
  return rows;
};

// Função para buscar um usuario pelo ID
const findById = async (id) => {
  const [rows] = await pool.execute('SELECT id, nome, linha_favorita FROM usuario WHERE id = ?', [id]);
  return rows[0];
};


// Função para editar um usuario pelo ID
const update = async (id, data) => {
  const { nome, linha_favorita } = data;
  const sql = 'UPDATE usuario SET nome = ?, linha_favorita = ? WHERE id = ?';
  
  await pool.execute(sql, [nome, linha_favorita, id]);
  return { id: id, ...data };
};

// Função para deletar um usuario pelo ID
const remove = async (id) => {
  const [result] = await pool.execute('DELETE FROM usuario WHERE id = ?', [id]);
  return result.affectedRows;
};

module.exports = {
  create,
  findAll,
  findById,
  remove
};