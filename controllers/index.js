const models = require('../database/models');

// post
const createpersona = async (req, res) => {
  try {
    const persona = await models.persona.create(req.body);
    return res.status(201).json({
	persona
    });

  } catch(error) {
    return res.status(500).json({ error: error.message }); 
  }
};

//get
const getAllpersonas = async (req, res) => {
  console.log('getting personas');
  try {
    const personas = await models.persona.findAll ({
      include: []
    });
    return res.status(200).json({personas});

  } catch (error) {
    return res.status(500).send(error.message);
  }
}; 

module.exports = {
  createpersona,
  getAllpersonas
}