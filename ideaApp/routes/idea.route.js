/**
 * This file will have the logic to route
 * the idea resource APIs
 */
 const ideaController = require("../controllers/idea.controller");

 module.exports = (app) => {
    // Define the routes

    /**
     * Route for getting all the ideas
     */
    app.get("/idea_app/api/v1/ideas", ideaController.getIdeas);

    /**
     * Route for creating the idea
     */
    app.post("/idea_app/api/v1/ideas", ideaController.createIdeas);

    /**
     * Route for getting ideas based on id
     */
    app.get("/idea_app/api/v1/ideas/:id", ideaController.getIdeasById);

    /**
     * Route for updating ideas based on id
     */
    app.put("/idea_app/api/v1/ideas/", ideaController.updateIdeasById);
 }