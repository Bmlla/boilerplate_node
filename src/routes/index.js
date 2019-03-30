const express = require(`express`);
const router = express.Router();
const controller = require('../controllers/padraoController')


router.get('/weather', controller.get);

module.exports = router;