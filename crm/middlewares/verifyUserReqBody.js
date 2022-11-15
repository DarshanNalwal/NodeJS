/**
 * Logic to verify the request bosy for signup
 */

const userModel = require("../models/user.model")

validateUserReqBody = async (req, res, next) => {

    // Validate name
    if(!req.body.name) {
        return res.status(400).send({
            message: "Failed! User name has not been provided"
        })
    }

    // Validate userId
    if(!req.body.userId) {
        return res.status(400).send({
            message: "Failed! UserId has not been provided"
        })
    } else {
        const userStored = await userModel.findOne({userId: req.body.userId});

        if(userStored) {
            return res.status(400).send({
                message: "UserId already used"
            })
        }
    }

    // Validate emailid
    if(!req.body.email) {
        return res.status(400).send({
            message: "Failed! EmailId has not been provided"
        })
    } else {
        const user = await userModel.findOne({email: req.body.email});

        if(user) {
            return res.status(400).send({
                message: "Failed! EmailId is already used"
            })
        }
    }

    // Validate userType
    const userTypes = ["CUSTOMER","ENGINEER","ADMIN"];
    const userType = req.body.userType;

    if(userType && !userTypes.includes(userType)) {
        return res.status(400).send({
            message: "Failed! User type has not been provided"
        })
    }

    // Validate password
    if(!req.body.password) {
        return res.status(400).send({
            message: "Failed! No password provided"
        })
    }

    next();
}

module.exports = {validateUserReqBody};