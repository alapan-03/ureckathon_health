const Ans = require("./../models/answerModel");
const Doc = require("./../models/doctorModel");

exports.postAns = async (req, res, next) => {
    try{
        const a = await Ans.create(req.body);

        a.questionId = req.params.qId;
        a.doctorId = req.params.docId? req.params.docId : null;
        a.userId = req.user._id;
        await a.save({ validateBeforeSave: false })

        res.status(201).json({
            status:"success",
            a
        })
    }
    catch(err){
        res.status(500).json({
            status:"fail",
            messgage: err.message
        })
    }
}

exports.getAns = async (req, res, next) => {
    try{
        const a = await Ans.find({questionId: req.params.qId}).populate("doctorId").populate("userId");

        res.status(201).json({
            status: "success",
            a
        })
        // a.doctorId = 
    }
    catch(err){
        res.status(201).json({
            status: "fail",
            message: err.message
        })
    }
}