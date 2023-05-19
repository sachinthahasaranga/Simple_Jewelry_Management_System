const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jewelry = new Schema(
    {
        code: {
            type: String,
            required: true,
            unique: true
        },
        store: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phoneNo: {
            type: String,
            required: true,
        },
        descrip: {
            type: String,
            required: true,
        },
        picture: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
const jewelry_Schema = mongoose.model(
    "jewelry",
    jewelry
);
module.exports = jewelry_Schema;
