var dbConn = require('../../config/db.config');

module.exports = {
    create: (req, res) => {
        dbConn.query("INSERT INTO crm_cat_regimen_matrimonial set ?", req.body, err => {
            if (err) {
                res.json({ error: true, message: 'Something went wrong', 'datos: ': err })
                console.log('Registros no creado')
            } else {
                res.json({ error: false, message: 'Registry created', 'datos: ': req.body })
                console.log('Registro creado')
            }
        })
    },
    findAll: (req, res) => {
        dbConn.query("Select * from crm_cat_regimen_matrimonial", (err, array) => {
            if (err) {
                res.json({ error: true, message: 'Something went wrong', 'datos: ': err })
                console.log('Registros no encontrados')
            } else {
                res.json({ error: false, message: 'Registries found', 'datos: ': array })
                console.log('Registros encontrados')
            }
        })
    },
    findById: (req, res) => {
        dbConn.query("Select * from crm_cat_regimen_matrimonial where id = ? ", req.params.id, (err, regimen) => {
            if (regimen == "" || regimen === 0) {
                res.json({ error: true, message: 'The registry was not found, invalid id', 'datos:': err })
                console.log('Registro no encontrado')
            } else {
                res.json({ error: false, message: 'Registry found', 'datos: ': regimen });
                console.log('Registro encontrado')
            }
        })
    },
    update: (req, res) => {
        dbConn.query("Select * from crm_cat_regimen_matrimonial where id = ? ", req.params.id, (err, regimen) => {
            if (regimen == "" || regimen === 0) {
                res.json({ error: true, message: 'The registry was not found, invalid id', 'datos:': err })
                console.log('El id proporcionado es inválido')
            } else {
                dbConn.query("UPDATE crm_cat_regimen_matrimonial SET regimen_matrimonial=?,descripcion=?,id_usuario_alta=?,id_usuario_edicion=?,eliminado=? WHERE id = ?",
                    [req.body.regimen_matrimonial, req.body.descripcion, req.body.id_usuario_alta, req.body.id_usuario_edicion, req.body.eliminado, req.params.id],
                    () => {
                        res.json({ error: false, message: 'Registry updated', 'datos: ': req.body })
                        console.log('Registro actualizado')
                    })
            }
        })
    },
    delete: (req, res) => {
        dbConn.query("Select * from crm_cat_regimen_matrimonial where id = ? ", req.params.id, (err, regimen) => {
            if (regimen == "" || regimen === 0) {
                res.json({ error: true, message: 'The registry was not found, invalid id', 'datos:': err })
                console.log('El id proporcionado es inválido')
            } else {
                dbConn.query("UPDATE crm_cat_regimen_matrimonial SET eliminado= 1 WHERE id = ?", req.params.id, () => {
                    res.json({ error: false, message: 'Registry deleted' })
                    console.log('Registro eliminado')
                })
            }
        })
    }
}