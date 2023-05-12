const { Router } = require('express');
const router = Router();

const allSurprisesController = require('../controllers/allSurprisesController');

router.get('/', allSurprisesController.getAllSurprise);

module.exports = router;
