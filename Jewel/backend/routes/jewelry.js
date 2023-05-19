const router = require('express').Router();
let jewelry_Schema = require('../models/jewelry');

router.route('/addjewelry').post((req, res) => {
    const { code, store, address, phoneNo, email, descrip, picture } = req.body;
    const jewelry = new jewelry_Schema({ code, store, address, phoneNo, email, descrip, picture });
    jewelry.save()
        .then(() => res.json('Jewelry Add!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/updatejewelry/").put(async (req, res) => {
    const { code, store, address, phoneNo, email, descrip, picture } = req.body;

    const jewelry = {
        code, store, address, phoneNo, email, descrip, picture
    }
    const update = await jewelry_Schema.findOneAndUpdate({ code: code }, jewelry).then(() => {
        res.status(200).send({ status: "Jewelry Updated" });
    }).catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with Updating Data", error: err.message });
    });
});

router.route("/deletejewelry/:code").delete(async (req, res) => {
    let code = req.params.code;
    jewelry_Schema.findOneAndDelete({ code: code })
        .then(() => {
            res.status(200).send({ status: "Jewelry Deleted" });

        }).catch((err) => {
            console.log(err);
            res.status(500).send({ status: "Error with Deleting Data", error: err.message });
        });
});

router.route("/alljewelry").get(async (req, res) => {
    jewelry_Schema.find()
        .then(jewelry => res.json(jewelry))
        .catch(err => res.status(400).json('No Data'))
});


module.exports = router;