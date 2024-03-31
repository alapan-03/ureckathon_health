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