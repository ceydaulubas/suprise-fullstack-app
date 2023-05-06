const { Router } = require('express');
const router = Router();

const surpriseController = require('../controllers/surpriseController');

router.post('/', surpriseController.generateAnswer);

module.exports = router;
