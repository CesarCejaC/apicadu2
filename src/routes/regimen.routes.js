const express = require('express')
const router = express.Router()
const regimenController = require('../controllers/regimen.controller')
const {validatePostAndPut, validategetByIdAndDelete} = require('../validators/regimen.validator')

//crear regimen
router.post('/', validatePostAndPut, regimenController.create)

//seleccionar todos
router.get('/', regimenController.findAll)

//seleccionar por id
router.get('/:id', validategetByIdAndDelete, regimenController.findById)

//actualizar por id
router.put('/:id', validatePostAndPut, regimenController.update)

//borrar por id
router.delete('/:id', validategetByIdAndDelete, regimenController.delete)

module.exports = router