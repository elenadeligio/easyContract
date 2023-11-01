const mongoose = require("mongoose"),
    { Schema } = require("mongoose"),

    projectoverviewSchema = new Schema(
        {
            title: {
                type: String,
                required: true,
                unique: true
            },
            details: {
                type: String,
                required: true
            },
            date: {
                type: String,
                required: true
            },

            notes: {
                type: String,
                required: false
            },

            category: {
                type: String,
                required: true,
                enum: ["Allgemein", "Finanzen", "Beratung", "Verwaltung", "Kooperation", "Ausbildung", "Öffentlichkeit", "Erledigt"]
            },
    
        }
    );

module.exports = mongoose.model("ProjectOverview", projectoverviewSchema);
