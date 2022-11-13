const authController = require("../controllers/auth.controller");

module.exports = (app) => {

    /**
     * POST 127.0.0.1:8080/crm/cpi/v1/auth/signup
     * 
     * Req body
     */
    app.post("/crm/api/v1/auth/signup", authController.singup);
}