const express = require('express')
const router = express.Router()
const regimenController = require('../controllers/regimen.controller')
const {validatePostAndPut, validategetByIdAndDelete} = require('../validators/regimen.validator')

//crear regimen
router.post('/',
    //validacion de datos
    validatePostAndPut,
    //pasa al controlador
    regimenController.create
)
//seleccionar todos
router.get('/',
    //pasa al controlador
    regimenController.findAll
)
//seleccionar por id
router.get('/:id',
    //validacion de datos
    validategetByIdAndDelete,
    //pasa al controlador
    regimenController.findById
)
//actualizar por id
router.put('/:id',
    //validacion de datos
    validatePostAndPut,
    //pasa al controlador
    regimenController.update
)
//borrar por id
router.delete('/:id',
    //validacion de datos
    validategetByIdAndDelete,
    //pasa al controlador
    regimenController.delete
)

module.exports = router