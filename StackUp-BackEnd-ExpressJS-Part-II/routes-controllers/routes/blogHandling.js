const router = require('express').Router();

const blogController = require('../controllers/blogController');

router.post('/', (req, res) => blogController.create_new_blog(req, res));
router.put('/id/:blog_id', (req, res) => blogController.update_blog_by_id(req, res));
router.delete('/id/:blog_id', (req, res) => blogController.delete_blog_by_id(req, res));
router.get('/id/:blog_id', (req, res) => blogController.get_blog_by_id(req, res));
router.get('/', (req, res) => blogController.get_all_blogs(req, res));
router.get('/test', (req, res) => blogController.test(req, res));

module.exports = router;