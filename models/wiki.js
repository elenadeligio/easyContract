const mongoose = require("mongoose"),
    { Schema } = require("mongoose");

    wikiSchema = new Schema(
        {
            topic: {
                type: String,
                required: true,
                unique: true
            },
            text: {
                type: String,
                required: true
            },
            author: {
                type: String,
                required: true
            },
            category: {
                type: String,
                required: true,
                enum: ["Allgemein", "Finanzen", "Beratung", "Verwaltung", "Kooperation", "Ausbildung", "Öffentlichkeit"]
            },
        }
    );

module.exports = mongoose.model("Wiki", wikiSchema);