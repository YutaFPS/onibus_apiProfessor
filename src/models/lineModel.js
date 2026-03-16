const pool = require('../config/db');

// Função para criar uma nova linha
const create = async (data) => {
  const { nome_linha, numero_linha, origem_linha, destino_linha, sentido_linha, numero_veiculo } = data;
  const sql = 'INSERT INTO linha (nome_linha, numero_linha, origem_linha, destino_linha, sentido_linha, numero_veiculo) VALUES (?, ?, ?, ?, ?, ?)';
  
  const [result] = await pool.execute(sql, [nome_linha, numero_linha, origem_linha, destino_linha, sentido_linha, numero_veiculo]);
  return { id_linha: result.insertId, ...data };
};

// Função para buscar todoas as linhas
const findAll = async () => {
  const [rows] = await pool.execute('SELECT * FROM linha');
  return rows;
};

// Função para buscar uma linha pelo ID
const findById = async (id) => {
  const [rows] = await pool.execute('SELECT id_linha, nome_linha, numero_linha, origem_linha, destino_linha, sentido_linha, numero_veiculo FROM linha WHERE id_linha = ?', [id]);
  return rows[0];
};

// Função para editar uma linha pelo ID
const update = async (id, data) => {
  const { nome_linha, numero_linha, origem_linha, destino_linha, sentido_linha, numero_veiculo } = data;
  const sql = 'UPDATE linha SET nome_linha = ?, numero_linha = ?, origem_linha = ?, destino_linha = ?, sentido_linha = ?, numero_veiculo = ? WHERE id_linha = ?';
  
  await pool.execute(sql, [nome_linha, numero_linha, origem_linha, destino_linha, sentido_linha, numero_veiculo, id]);
  return { id_linha: id, ...data };
};

// Função para deletar uma linha pelo ID
const remove = async (id) => {
  const [result] = await pool.execute('DELETE FROM linha WHERE id_linha = ?', [id]);
  return result.affectedRows;
};

// Exporta as funções
module.exports = {
  create, 
  findAll,
  findById,
  update,
  remove
};