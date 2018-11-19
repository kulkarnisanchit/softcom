const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user.controller');
//const userModel =  require('../../models/user.model');

//@route GET api/users/test
//@desc Tests users route
//@access Public
router.get('/test', userController.test );

router.post('/add', userController.add );

router.get('/', userController.getAll );

router.get('/:id', userController.getUser );

router.put('/:id/update', userController.update);

router.delete('/:id/delete', userController.delete);

module.exports = router;