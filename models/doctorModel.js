const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
    name: {
        type: String,
    },
    clinic: {
        type: String,
    },
    age: {
        type: Number,
    },
    experience: {
        type: Number,
    },
    specialty: {
        type: String,
    }
})

const doctor = mongoose.model("Doctor", doctorSchema);

module.exports = doctor;