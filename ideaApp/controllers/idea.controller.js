/**
 * This file is a controller file for idea
 */
const ideaModel = require("../models/idea.model");
var count = 1;

/**
 * Logic to create idea
 */
exports.createIdeas = (req,res) => {
    req.body.id = ++count;
    ideaModel[count] = req.body;
    return res.status(200).send(ideaModel[count]);
}


/**
 * Logic to fetch all idea
 * 
 * GET 127.0.0.1:8080/idea_app/api/v1/ideas
 */

exports.getIdeas = (req, res) => {
    // return all the ideas
    return res.status(200).send(ideaModel);
}

/**
 * Logic to fetch idea based on id
 */
exports.getIdeasById = (req, res) => {
    // return all the ideas
    return res.status(200).send(ideaModel[req.params.id]);
}

/**
 * Logic to update a specific idea
 */
exports.updateIdeasById = (req, res) => {
    // return all the ideas
    if(ideaModel[req.body.id]) {
        ideaModel[req.body.id] = req.body;
        return res.status(200).send(ideaModel[req.body.id]);
    }
    else {
        return res.status(400).send({
            message: "Idea you are trying to update doesn't exist"
        });
    }
    
}