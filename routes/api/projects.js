const express = require('express');
const router = express.Router();
const projectController = require('../../controllers/project.controller');

//@route GET api/users/test
//@desc Tests users route
//@access Public
router.get('/test', projectController.test );

router.post('/add', projectController.add );

router.get('/', projectController.getAll );

router.get('/:id', projectController.getProject );

router.put('/:id/update', projectController.update);

router.delete('/:id/delete', projectController.delete); 

module.exports = router;