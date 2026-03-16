const pool = require('../config/db');

// Função para criar uma nova line
const create = async (data) => {
  const { name_line, number_line, origin_line, destination_line, sense_line, number_vehicle } = data;
  const sql = 'INSERT INTO line (name_line, number_line, origin_line, destination_line, sense_line, number_vehicle) VALUES (?, ?, ?, ?, ?, ?)';
  
  const [result] = await pool.execute(sql, [name_line, number_line, origin_line, destination_line, sense_line, number_vehicle]);
  return { id_line: result.insertId, ...data };
};

// Função para buscar todoas as lines
const findAll = async () => {
  const [rows] = await pool.execute('SELECT * FROM line');
  return rows;
};

// Função para buscar uma line pelo ID
const findById = async (id) => {
  const [rows] = await pool.execute('SELECT id_line, name_line, number_line, origin_line, destination_line, sense_line, number_vehicle FROM line WHERE id_line = ?', [id]);
  return rows[0];
};

// Função para editar uma line pelo ID
const update = async (id, data) => {
  const { name_line, number_line, origin_line, destination_line, sense_line, number_vehicle } = data;
  const sql = 'UPDATE line SET name_line = ?, number_line = ?, origin_line = ?, destination_line = ?, sense_line = ?, number_vehicle = ? WHERE id_line = ?';
  
  await pool.execute(sql, [name_line, number_line, origin_line, destination_line, sense_line, number_vehicle, id]);
  return { id_line: id, ...data };
};

// Função para deletar uma line pelo ID
const remove = async (id) => {
  const [result] = await pool.execute('DELETE FROM line WHERE id_line = ?', [id]);
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