const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jeweAppoiment = new Schema(
    {
        code: {
            type: String,
            required: true,
        },
        store: {
            type: String,
            required: true,
        },
        phoneNo: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
const jeweAppoiment_Schema = mongoose.model(
    "jeweAppoiment",
    jeweAppoiment
);
module.exports = jeweAppoiment_Schema;
