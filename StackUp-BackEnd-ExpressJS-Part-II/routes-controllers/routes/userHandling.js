const router = require('express').Router();

const userController = require('../controllers/userController');

router.get('/profile/id/:user_id', (req, res) => userController.get_user_profile_by_id(req, res));
router.put('/profile/id/:user_id', (req, res) => userController.update_user_profile_by_id(req, res));
router.get('/test', (req, res) => userController.test(req, res));

module.exports = router;