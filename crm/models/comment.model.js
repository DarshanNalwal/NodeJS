const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    ticketId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "ticket",
        required: true
    },
    commenterId: {
        type: String,
        required: true
    }
}, {
    timestamps: true, // Auto-populate createdAt and updatedAt
    versionKey: false // Do not maintain version field (__v)
});

module.exports = mongoose.model("comment", commentSchema);