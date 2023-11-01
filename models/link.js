const mongoose = require("mongoose"),
    { Schema } = require("mongoose");

    linkSchema = new Schema(
        {
            title: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            },
            label: {
                type: String,
                enum: ["Alle", "Allgemein", "Orga", "Berater"]
            },
        }
    );

module.exports = mongoose.model("Link", linkSchema);