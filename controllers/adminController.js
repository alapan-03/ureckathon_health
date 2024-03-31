const mongoose = require("mongoose");
const User = require("../models/authModel");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");
let express = require('express'); 
let app = express() 
const Doc = require("./../models/doctorModel")
const Admin = require("./../models/adminModel")

// exports.admLogin = async (req, res, next) => {
//     try {
//         const { email, password } = req.body;
        
//         if (!email || !password) {
//             return res.status(400).json({
//                 status: 'fail',
//                 message: 'Please provide both email and password',
//             });
//         }


//       const user = await User.findOne({ email });

  
//       if (!user || !(await user.correctPassword(password, user.password))) {
//         return req.status(400).json({
//           status: 'fail',
//           message: 'Incorrect email or password',
//         });
//       }
  
//       const token = jwt.sign({ id: user._id },  "my-very-naughty-monkey-just-swallowed-pumkin-nuts");
  
//       res.status(200).json({
//         status: 'success',
//         token,
//       });
//     } catch (err) {
//       return res.status(400).json({
//         status: 'fail',
//         message: err.message,
//       });
//     }
//   };
  

exports.postAdmin = async (req, res) => {
    try{
        const admin = await Admin.create(req.body);

            res.status(201).json({
                status: "success",
                admin
            })
        }
        catch(err){
            res.status(500).json({
                status: "fail",
                message: err.message
            })
    }
}


  exports.postDoc = async (req, res, next) => {
    try{
        const admin = await Admin.findOne(req.user._id);

        if(!admin){
            res.status(404).json({
                status: "fail",
                message: "Admin not found"
            })
        }

        if(admin.role === "admin"){
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