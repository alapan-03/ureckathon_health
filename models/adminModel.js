const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const adminSchema = mongoose.Schema({
    email: {
        type: String,
        validate: [validator.isEmail, "Please provide a valid email"],
        required: [true, "An email is required while signing up"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "A password is required while signing up"]
    },


    role: {
        type: String,
        default: "User",
        enum: ["user", "admin"]
    },
    // passChangedAt: Date,


    },
{
    toJSON: {virtuals: true},
    toObject: {virtuals: true}
}
)



// UserSchema.pre(/^find/, function(next){
//     this.populate({
//         path: "tour",
//         select: "name price image",
//     }).populate({
//         path: "detail"
//     })

//     next()
// })


  

// UserSchema.index({ email: 1 }, { unique: true });


// UserSchema.pre("save", async function(next){
//     if(!this.isModified("password"))
//     return next();

//     this.password = await bcrypt.hash(this.password, 12);
//     this.confirmPassword = undefined;
//     next()
// })

// UserSchema.methods.correctPassword = async function(inputPass, userPass){
//     return await bcrypt.compare(inputPass, userPass);
// }



const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;

