var dbConn = require('../../config/db.config');

module.exports = {
    create: async (req, result) => {
        dbConn.query("INSERT INTO crm_cat_regimen_matrimonial set ?", req.body, () => {
            result.json({ error: false, message: 'Registry created', 'datos: ': req.body });
            console.log('registro creado')
        });
    },
    findAll: async result => {
        dbConn.query("Select * from crm_cat_regimen_matrimonial", res => {
            result.json({ error: false, message: 'Registries found', 'datos: ': res });
            console.log('Registros encontrados')
        });
    },
    findById: async (req, result) => {
        dbConn.query("Select * from crm_cat_regimen_matrimonial where id = ? ", req.params.id, res => {
            if (res == "" || res === 0) {return result.json({ error: true, message: 'The registry was not found, invalid id' });}
            result.json({ error: false, message: 'Registry found', 'datos: ': res });
            console.log('búsqueda realizada')
        })
    },
    update: async (req, result) => {
        dbConn.query("Select * from crm_cat_regimen_matrimonial where id = ? ", req.params.id, (err, res) => {
            if (res == "" || res === 0) {return result.json({ error: true, message: 'The registry was not found, invalid id' });
            } else {
                dbConn.query("UPDATE crm_cat_regimen_matrimonial SET regimen_matrimonial=?,descripcion=?,id_usuario_alta=?,id_usuario_edicion=?,eliminado=? WHERE id = ?",
                [req.body.regimen_matrimonial, req.body.descripcion, req.body.id_usuario_alta, req.body.id_usuario_edicion, req.body.eliminado, req.params.id],
                () => {
                    result.json({ error: false, message: 'Registry updated', 'datos: ': req.body })
                    console.log('registro actualizado')
                })
            }
        })
    },
    delete: async (req, result) => {
        dbConn.query("Select * from crm_cat_regimen_matrimonial where id = ? ", req.params.id, res => {
            if (res == "" || res === 0) {return result.json({ error: true, message: 'The registry was not found, invalid id' });
            } else {
                dbConn.query("UPDATE crm_cat_regimen_matrimonial SET eliminado= 1 WHERE id = ?", req.params.id, () => {
                    result.json({ error: false, message: 'Registry deleted' })
                    console.log('registro eliminado')
                })
            }
        })
    }
}