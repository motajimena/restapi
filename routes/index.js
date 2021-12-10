const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Hola soy Jimena Mota y esta es mi API'));

router.post('/personas', controllers.createpersona);
router.get('/personas', controllers.getAllpersonas);

module.exports = router;