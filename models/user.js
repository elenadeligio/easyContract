const mongoose = require("mongoose"),
    {Schema} = require("mongoose"),
    passportLocalMongoose = require("passport-local-mongoose"),

    userSchema = new Schema(
        {
            name: {
                first: {
                    type: String,
                    trim: true
                },
                last: {
                    type: String,
                    trim: true
                }
            },
            email: {
                type: String,
                required: true,
                lowercase: true,
                unique: true
            },
            password: {
                type: String,
                required: true
            },
            roles: {
                type: [String],
                enum: ["Admin", "Basic"],
                required: true
            },
            links: [{
                type: Schema.Types.ObjectId,
                ref: "Link"
            }]
        }
    );

userSchema.virtual("fullName").get(function() {
    return `${this.name.first} ${this.name.last}`;
});
userSchema.virtual("role").get(function () {
    return `${this.roles}`;
})
userSchema.plugin(passportLocalMongoose, {
    usernameField: "email"
});

module.exports = mongoose.model("User", userSchema);
