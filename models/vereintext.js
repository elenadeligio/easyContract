const mongoose = require("mongoose"),
    { Schema } = require("mongoose");

vereintextSchema = new Schema(
    {
        vereintext: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
            enum: ["§ 1 Name, Sitz",
                   "§ 2 Zweck",
                   "§ 3 Mitgliedschaft",
                   "§ 4 Vorstand",
                   "§ 5 Mitgliederversammlung",
                   "§ 6 Auflösung, Anfall des Vereinsvermögens",
                   "§ 7 Schlussbestimmung"]
        }
    }
);

module.exports = mongoose.model("Vereintext", vereintextSchema);