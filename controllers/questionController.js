const Ques = require("./../models/questionModel");

exports.postQuestion = async (req, res, next) => {
    try{
        const q = await Ques.create({userId: req.user._id, description: req.body.description}); 

        q.createdAt = Date.now();
        await q.save({validateBeforeSave: false});

        res.status(201).json({
            status: "success",
            q
        })
    }
    catch(err){
        res.status(500).json({
            status: "fail",
            message: err.message
        })
    }
}

exports.getQuestion = async (req, res, next) => {
    try{
        const q = await Ques.find().populate("userId");

        res.status(201).json({
            status: "success",
            q
        })
    }
    catch(err){
        res.status(500).json({
            status: "fail",
            message: err.message
        })
    }
}