const router = require('express').Router();
const indexController = require('../controllers/indexController');

// Views
router.get('/', (req,res)=> indexController.indexView(req,res));
router.get('/dashboard', (req,res)=> indexController.dashboardView(req,res));
router.get('/post', (req,res)=> indexController.postView(req,res));
router.get('/post/:id', (req,res)=> indexController.postViewById(req,res));

module.exports = router;