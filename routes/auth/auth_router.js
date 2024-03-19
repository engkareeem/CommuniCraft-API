const express = require('express');
const router = express.Router();
const authController = require('../../controller/auth_controller');
const {getCurrentUser, checkAuth} = require('../../middleware/auth_middleware');


router.post('/login', authController.login);
router.post('/signup', authController.signup);
router.get('/logout', getCurrentUser,  authController.logout);
router.get('/checkAuth', checkAuth, authController.isAuthorized);
router.use('/', authController.auth_erorr_handler);


module.exports = router