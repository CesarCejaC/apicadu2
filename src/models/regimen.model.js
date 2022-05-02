'use strict';
const res = require('express/lib/response');
var dbConn = require('../../config/db.config');

var RegimenMatrimonial = function (regimenMatrimonial) {
    //this.id = regimenMatrimonial.id;
    this.regimen_matrimonial = regimenMatrimonial.regimen_matrimonial;
    this.descripcion = regimenMatrimonial.descripcion;
    this.id_usuario_alta = regimenMatrimonial.id_usuario_alta;
    //this.fecha_alta = regimenMatrimonial.fecha_alta;
    this.id_usuario_edicion = regimenMatrimonial.id_usuario_edicion;
    //this.fecha_edicion = regimenMatrimonial.fecha_edicion;
    this.eliminado = regimenMatrimonial.eliminado;
};


//Querys

//Create
RegimenMatrimonial.create = function (newRegimen, result) {
    dbConn.query("INSERT INTO crm_cat_regimen_matrimonial set ?", newRegimen, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
            console.log('registro creado')
        }
    });
};
// FIN BY ID funciona
RegimenMatrimonial.findById = function (id, result) {
    dbConn.query("Select * from crm_cat_regimen_matrimonial where id = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
            console.log('búsqueda realizada')
        }
    });
};
//FIND ALL
RegimenMatrimonial.findAll = function (result) {
    dbConn.query("Select * from crm_cat_regimen_matrimonial", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
            console.log('registros deslpegados')
        }
    });
};
//UPDATE
RegimenMatrimonial.update = function (id, regimen, result) {

    dbConn.query("Select * from crm_cat_regimen_matrimonial where id = ? ", id, function (err, res) {
        if (res.length === 0) {
            result(null, err);
        } else {
            dbConn.query("UPDATE crm_cat_regimen_matrimonial SET regimen_matrimonial=?,descripcion=?,id_usuario_alta=?,fecha_alta=?,id_usuario_edicion=?,fecha_edicion=?,eliminado=? WHERE id = ?", [regimen.regimen_matrimonial, regimen.descripcion, regimen.id_usuario_alta, regimen.fecha_alta, regimen.id_usuario_edicion, regimen.fecha_edicion, regimen.eliminado, id], function (err, res) {
                if (err) {
                    console.log("error: ", err);
                    result(null, err);
                } else {
                    result(null, res);
                    console.log('registro actualizado')
                }
            })
        }
    })
};
//DELETE
RegimenMatrimonial.delete = function (id, result) {

    dbConn.query("Select * from crm_cat_regimen_matrimonial where id = ? ", id, function (err, res) {
        if (res.length === 0) {
            result(null, err);
        } else {
            dbConn.query("UPDATE crm_cat_regimen_matrimonial SET eliminado= 1 WHERE id = ?", [id], function (err, res) {
                if (err) {
                    console.log("error: ", err);
                    result(null, err);
                }
                else {
                    result(null, res);
                    console.log('registro eliminado')
                }
            });

        }
    })
};

module.exports = RegimenMatrimonial;