const mongoose = require("mongoose"),
    { Schema } = require("mongoose"),

    calendarSchema = new Schema(
        {
            title: {
                type: String,
                required: true,
                unique: true
            },
            text: {
                type: String,
                required: true
            }
        }
    );

module.exports = mongoose.model("Calendar", calendarSchema);