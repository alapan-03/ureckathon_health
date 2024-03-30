const User = require("./../models/authModel")
const Community = require("./../models/communityModel")

exports.getIntoCommunity = async (req, res, next) => {
    try{
        let trimmedCity = req.city.trim();
        let city = trimmedCity.charAt(0).toUpperCase() + trimmedCity.slice(1);

        const com = await Community.findOne({name: city});
        const user = await User.findOne(req.user._id);

        console.log(com)

        if(!com || com.length<1){
            const createCom = await Community.create({name: city});
            user.communityId = createCom._id;
            await user.save({validateBeforeSave: false})

            res.status(201).json({
                status: "success",
                createCom,
                communityId: user.communityId
            })
        }
        else{
            user.communityId = com._id;
            await user.save({ validateBeforeSave: false })

            res.status(200).json({
                status: "success",
                message: "User is added to the respective community",
                communityId: user.communityId
            })
        }
    
        // com.name = city;

    }
    catch(err){
        res.status(500).json({
            status: "fail",
            message: err.message
        })
    }
}