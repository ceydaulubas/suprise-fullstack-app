const { Router } = require('express');
const router = Router();

const authController = require('../controllers/authController');
const authMiddleware = require("../middlewares/auth");

// Public routes
router.post('/signup', authController.signUpUser);
router.post("/login", authController.loginUser);

// Private routes
router.get("/private", authMiddleware, (req, res) => {
    res.status(200).json({ message: "This is a private route" });
});

module.exports = router;
