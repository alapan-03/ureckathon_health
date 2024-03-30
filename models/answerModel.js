const mongoose = require("mongoose");

const answerSchema = mongoose.Schema({
    answer: {
        type: String,
    },

    doctorId: {
        type: mongoose.Schema.ObjectId,
        ref: "Doctor"
    },

    questionId: mongoose.Schema.ObjectId
})

const answer = mongoose.model("Answer", answerSchema);

module.exports = answer;