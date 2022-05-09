const express= require('express')
const router = express.Router()
const { getAll, getById, create, updateById, deleteById} = require('../controllers/regimen.controller')
const {validatePostAndPut, validategetByIdAndDelete} = require('../validators/regimen.validator')

router.get('/', getAll)

router.get('/:id',validategetByIdAndDelete, getById)

router.post('/',validatePostAndPut, create)

router.put('/:id',validatePostAndPut, updateById)

router.delete('/:id',validategetByIdAndDelete, deleteById)

module.exports = router