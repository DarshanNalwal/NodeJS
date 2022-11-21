const commentModel = require("../models/comment.model");

exports.createComment = async (req, res) => {

    // Read the comment from req and create comment object
    const commentObj = {
        content: req.body.content,
        ticketId: req.params.ticketId,
        commenterId: req.userId
    }

    // Create the comment object
    const comment = await commentModel.create(commentObj);

    // Send the comment create success response
    res.status(201).send(comment);
}

exports.findAllComments = async (req, res) => {
    // Fetch comments by ticketId
    const comments = await commentModel.find({
        "ticketId": req.params.ticketId
    });

    // Return response 
    res.status(200).send(comments);
}