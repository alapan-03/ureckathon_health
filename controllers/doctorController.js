const User = require("../models/authModel");
const Doc = require("./../models/doctorModel")

exports.getDoc = async (req, res, next) => {
    try{
        const doc = await Doc.find();

        res.status(200).json({
            status: "success",
            doc
        })
    }
    catch(err){
        res.status(200).json({
            status: "fail",
            message: err.message
        })
    }
}


exports.postDoc = async (req, res, next) => {
    try{
        const user = await User.findOne(req.user._id);

        console.log(user.role)
        if(user.role === "admin"){
            const doc = await Doc.create(req.body);

            res.status(201).json({
                status: "success",
                doc
            })
        }

        else{
            res.status(500).json({
                status: "fail",
                message: "User is not admin"
            })
        }
    }
    catch(err){
        res.status(500).json({
            status: "fail",
            message: err.message
        })
    }
  }