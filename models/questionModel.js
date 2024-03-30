const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: [true, "A question should have a specific user"]
    },
    description: {
        type: String,
        required: [true, "Community name is required"]
    },
    createdAt: Date,
    communityId: mongoose.Schema.ObjectId
})



const question = mongoose.model("Question", questionSchema);

module.exports = question;