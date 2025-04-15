const express = require('express');
const router = express.Router();

// ✅ Make sure this path matches the actual file and exports functions
const { registerUser, loginUser, getAllUsers } = require('../controllers/userController');

// Routes
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/', getAllUsers);

module.exports = router;

