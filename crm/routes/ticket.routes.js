const ticketController = require("../controllers/ticket.controller");
const authJwt = require("../middlewares/authjwt");
const commentController = require("../controllers/comment.controller");

module.exports = (app) => {
    app.post("/crm/api/v1/tickets", [authJwt.verifyToken], ticketController.createTicket);

    app.get("/crm/api/v1/tickets", [authJwt.verifyToken], ticketController.findTickets);

    app.get("/crm/api/v1/tickets/:id", [authJwt.verifyToken], ticketController.getOneTicket);

    app.post("/crm/api/v1/tickets/:ticketId/comments", [authJwt.verifyToken], commentController.createComment);

    app.get("/crm/api/v1/tickets/:ticketId/comments", [authJwt.verifyToken], commentController.findAllComments);
}