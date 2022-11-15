const authController = require("../controllers/auth.controller");
const verifyUserReqBody = require("../middlewares/verifyUserReqBody");

module.exports = (app) => {

    /**
     * POST 127.0.0.1:8080/crm/cpi/v1/auth/signup
     * 
     * Req body
     */
    app.post("/crm/api/v1/auth/signup", [verifyUserReqBody.validateUserReqBody] ,authController.singup);

    app.post("/crm/api/v1/auth/signin", authController.signin);
}