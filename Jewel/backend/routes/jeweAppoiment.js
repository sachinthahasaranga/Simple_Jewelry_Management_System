const router = require('express').Router();
let jeweAppoiment_Schema = require('../models/jeweAppoiment');

router.route('/addjeweAppoiment').post((req, res) => {
    const { code, store, phoneNo, name, date, message } = req.body;
    const jeweAppoiment = new jeweAppoiment_Schema({ code, store, phoneNo, name, date, message });
    jeweAppoiment.save()
        .then(() => res.json('Jewelry Appoiment Add!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route("/alljeweAppoiment").get(async (req, res) => {
    jeweAppoiment_Schema.find()
        .then(jeweAppoiment => res.json(jeweAppoiment))
        .catch(err => res.status(400).json('No Data'))
});


module.exports = router;