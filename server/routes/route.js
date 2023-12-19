const express = require('express')
const router = express.Router()
const {
    indexController,
    createController,
    readController,
    updateController,
    deletController
} = require('../controllers/crudController')


router.get('/',indexController)
router.post('/new', createController)
router.get('/getUsr/:id',readController)
router.put('/updateUsr/:id',updateController)
router.delete('/delUsr/:id',deletController)

module.exports = router