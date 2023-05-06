const { Router } = require('express');
const router = Router();

const authController = require('../controllers/authController');

router.post('/', authController.signUpUser);
router.post('/verify', authController.verifyEmail);
router.post('/isActive', authController.isActive);
router.post('/logout', authController.logOut);

module.exports = router;
