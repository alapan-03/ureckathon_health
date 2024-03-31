const mongoose = require("mongoose");

const answerSchema = mongoose.Schema({
    answer: {
        type: String,
        required: [true, "Answer is required"]
    },

    doctorId: {
        type: mongoose.Schema.ObjectId,
        ref: "Doctor"
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User"
    },

    createdAt: Date,

    questionId: mongoose.Schema.ObjectId
})

const answer = mongoose.model("Answer", answerSchema);

module.exports = answer;