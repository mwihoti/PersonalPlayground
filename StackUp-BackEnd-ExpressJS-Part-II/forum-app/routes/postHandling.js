const router = require('express').Router();
const postController = require('../controllers/postController');

// Views
router.post('/', (req, res) => postController.create_post(req, res));
router.post('/comment/id/:post_id', (req, res) => postController.submit_comment(req, res));

module.exports = router;