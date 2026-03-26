const pool = require('../config/db');

const create = async (data) => {
    const { user_name, favorite_line } = data;
    const sql = 'INSERT INTO user (user_name, favorite_line) VALUES (?, ?)';

    const [result] = await pool.execute(sql, [user_name, favorite_line]);
    return { id_user: result.insertId, ...data};
};

module.exports = {
  create
};
