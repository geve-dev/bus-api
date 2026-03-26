const lineModel = require('../models/lineModel');

// CREATE
const createLine = async (req, res) => {
  try {
    const { name_line, number_line, origin_line, destination_line, sense_line, number_vehicle } = req.body;

    const lineData = {
      name_line,
      number_line,
      origin_line,
      destination_line,
      sense_line,
      number_vehicle
    };

    const newLine = await lineModel.create(lineData);
    
    res.status(201).json(newLine);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao criar a line de bus', error: error.message });
  }
};

// READ (All)
const getAllLine = async (req, res) => {
  try {
    const lines = await lineModel.findAll();
    res.status(200).json(lines);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar as lines', error: error.message });
  }
};

// READ (id)
const getLineById = async (req, res) => {
  try {
    const { id } = req.params;
    const line = await lineModel.findById(id);

    if (!line) {
      return res.status(404).json({ message: 'line não encontrada.' });
    }
    res.status(200).json(line);

  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar a line', error: error.message });
  }
};

// UPDATE
const updateLine = async (req, res) => {
  try {
    const { id } = req.params;
    const { name_line, number_line, origin_line, destination_line, sense_line, number_vehicle } = req.body;

    // Verificamos se a line existe antes de atualizar
    const lineExists = await lineModel.findById(id);
    if (!lineExists) {
      return res.status(404).json({ message: 'line de bus não encontrada para atualização.' });
    }

    const updatedData = { name_line, number_line, origin_line, destination_line, sense_line, number_vehicle };
    const updatedLine = await lineModel.update(id, updatedData);

    res.status(200).json(updatedLine);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar a line', error: error.message });
  }
};

// DELETE
const deleteLine = async (req, res) => {
  try {
    const { id } = req.params;
    const affectedRows = await lineModel.remove(id);

    if (affectedRows === 0) {
      return res.status(404).json({ message: 'line não encontrada para exclusão.' });
    }
    
    // 204 = No Content (sucesso, mas não retorna nada, precisa adicionar mensagem)
    res.status(204).send(); 
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar a line.', error: error.message });
  }
};

//exporta as funções
module.exports = {
  createLine,
  getAllLine,
  getLineById,
  updateLine,
  deleteLine
};
