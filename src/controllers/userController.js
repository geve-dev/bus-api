const userModel = require('../models/userModel');

const createUser = async (req, res) => {
    try {
        const { user_name, favorite_line } = req.body;

        const userData = {
            user_name,
            favorite_line
        };

        const newUser = await userModel.create(userData);

        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erro ao criar o usuario', error: error.message })
    }
}

module.exports = {
  createUser
};
