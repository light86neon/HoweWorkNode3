const router = require('express').Router();

const userController = require('../controller/user.controller');
const userMiddleware = require('../middleware/user.middleware');


router.get('/', userController.getAllUsers);

router.get('/:userId',
    userMiddleware.checkIsIdValid,
    userMiddleware.checkIsUserExists,
    userController.getSingleUser);

router.delete('/:userId',
    userMiddleware.checkIsIdValid,
    userController.findOneAndDelete
    );

router.post('/', userController.createUser);

module.exports = router;
