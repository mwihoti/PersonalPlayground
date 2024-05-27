const router = require('express').Router();

const authController = require('../controllers/authController');

router.post('/register', (req, res) => authController.register_user(req, res));
router.post('/login', (req, res) => authController.login(req, res));
router.get('/test', (req, res) => authController.test(req, res));

module.exports = router;