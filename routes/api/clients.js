const express = require('express');
const router = express.Router();
const clientController = require('../../controllers/client.controller');

//@route GET api/users/test
//@desc Tests users route
//@access Public
router.get('/test', clientController.test );

router.post('/add', clientController.add );

router.get('/:id', clientController.getClient );

router.get('/', clientController.getAll );

router.put('/:id/update', clientController.update);

router.delete('/:id/delete', clientController.delete);

module.exports = router;