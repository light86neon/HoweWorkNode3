const router = require('express').Router();

const promisify = require('util').promisify;

const userController = require('../controller/user.controller');
const userMiddleware = require('../middleware/user.middleware');


router.get('/', userController.getAllUsers);

router.get('/:userId',
    userMiddleware.checkIsIdValid,
    userMiddleware.checkIsUserExists,
    userController.getSingleUser);

// router.post(userMiddleware.isUserValid)
router.post('/', userController.createUser);

router.delete('/:userId', userController.findOneAndDelete );


module.exports = router;
