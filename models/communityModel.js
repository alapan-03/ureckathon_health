const mongoose = require("mongoose");

const communitySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Community name is required"]
    }
})

const community = mongoose.model("Community", communitySchema);

module.exports = community;