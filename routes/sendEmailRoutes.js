const { Router } = require('express');
const sendEmailController = require('../controllers/sendEmailController');
const router = Router();

router.post('/', sendEmailController.sendMail);

module.exports = router;
