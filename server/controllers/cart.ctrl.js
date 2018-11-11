var express = require('express');
var stripeSvc = require('../services/stripe.svc');
var eSvc = require("../services/email.svc");
var procedures = require("../procedures/checkout.proc");
var router = express.Router();



router.route('/')
    .get(function (req, res) {
        procedures.all().then(function (success) {
            res.send(success);
        }, function (err) {
            console.log(err);
            res.status(500).send(err);
        })
    })
    .post(function (req, res) { // /api/donations
        var amount = Number(req.body.amount) * 100;
        stripeSvc.charge(req.body.token, amount)
            .then(function (success) {
                console.log(req.body.token);
                res.sendStatus(204);
            }, function (err) {
                // console.log(err); 
                res.sendStatus(500).send(err);
            });
    });

//// is this your purchases id thing that goes in the table?
router.route('/:id')
    .delete(function (req, res) {
        procedures.delete(req.params.id).then(function (success) {
            res.sendStatus(204);
        }, function (err) {
            console.log(err);
            res.status(204).send(err);
        })
    });

module.exports = router;