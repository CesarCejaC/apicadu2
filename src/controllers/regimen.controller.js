const RegimenController = require('../models/regimen.model')

module.exports = {
    create: function (req, res) {
        const new_regimen = new RegimenController(req.body)
        RegimenController.create(new_regimen, function (err, regimen) {
            if (err)
                res.send(err);
            res.status(201).json({ error: false, message: "Register added successfully!", 'datos: ': req.body })
        });
    },
    findAll: function (req, res) {
        RegimenController.findAll(function (err, regimen) {
            if (err)
                res.send(err);
            res.send(regimen);
        });
    },
    findById: function (req, res) {
        RegimenController.findById(req.params.id, function (err, regimen) {
            if (err)
                res.send(err);
            if (regimen == "") {
                return res.json({ error: true, message: 'The registry was not found, invalid id' });
            }
            res.json({ error: false, message: 'Registry found', 'datos: ': regimen });
        });
    },
    update: function (req, res) {
        RegimenController.update(req.params.id, new RegimenController(req.body), function (err, regimen) {
            if (err)
                res.send(err);
            if (regimen === null) {
                res.json({ error: true, message: 'The registry was not updated, invalid id' });
            } else {
                res.json({ error: false, message: 'Registry successfully updated', 'datos: ': req.body });
            }
        });
    },
    delete: function (req, res) {
        RegimenController.delete(req.params.id, function (err, regimen) {
            if (err)
                res.send(err);
            if (regimen === null) {
                res.json({ error: true, message: 'Registry was not deleted, invalid id' });
            }
            else{
                res.json({ error: false, message: 'Registry successfully deleted' });
            }
        });
    },
}