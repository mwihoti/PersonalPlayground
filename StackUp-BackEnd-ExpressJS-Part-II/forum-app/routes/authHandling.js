const router = require('express').Router();
const authController = require('../controllers/authController');

// Views
router.get('/register', (req,res)=> authController.registerView(req,res));
router.get('/login', (req,res)=> authController.loginView(req,res));

router.post('/register', (req, res) => authController.register(req, res));
router.post('/login', (req, res) => authController.login(req, res));

module.exports = router;