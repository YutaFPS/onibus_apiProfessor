const pool = require('../config/db');

const create = async (data) => {
const { nome, linha_favorita } = data;
const sql = 'INSERT INTO user (nome, linha_favorita) VALUES ( ?, ?)';
  
  const [result] = await pool.execute(sql, [nome, linha_favorita]);
  return { id: result.insertId, ...data };
};

module.exports = {
  create,
};