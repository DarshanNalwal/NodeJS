const ticketModel = require("../models/ticket.model");
const userModel = require("../models/user.model");

/**
 * Write the logic to create a new ticket
 */

exports.createTicket = async (req, res) => {
    // We need to write the logic to create the ticket
    const ticketObj = {
        title: req.body.title,
        ticketPriority: req.body.ticketPriority,
        description: req.body.description,
        status: "OPEN",
        reporter: req.userId // This is the userId of the person creating the ticket
    }

    // Find userId of Engineer who will be assignee
    const eng = await userModel.findOne({userType: "ENGINEER", userStatus: "APPROVED"});

    if(eng) {
        ticketObj.assignee = eng.userId;
    }

    // Store it in the DB
    const ticketCreated = await ticketModel.create(ticketObj);

    const ticketResp = {
        title: ticketCreated.title,
        ticketPriority: ticketCreated.ticketPriority,
        description: ticketCreated.description,
        status: ticketCreated.status,
        reporter: ticketCreated.reporter,
        assignee: ticketCreated.assignee,
        createdAt: ticketCreated.createdAt,
        updatedAt: ticketCreated.updatedAt
    }

    // Return the response
    res.status(201).send(ticketResp);
}

exports.findTickets = async (req, res) => {

    // Find the userType by userId in request
    const user = await userModel.findOne({userId: req.userId});

    // Define query obj based on userType
    let queryObj = {};

    if(user.userType === "CUSTOMER") {
        queryObj.reporter = user.userId;
    } else if (user.userType === "ENGINEER") {
        queryObj["$Or"] = [{reporter: req.userId}, {assignee: req.userId}];
    }
      
    // Query DB to find all tickets
    const tickets = await ticketModel.find(queryObj);

    // Return the response
    return res.status(200).send(tickets);
}

/**
 * Fetch ticket based on ticketId
 * GET /crm/api/v1/tickets/:id
 */
exports.getOneTicket = async (req, res) => {
    const ticket = await ticketModel.findById({
        _id: req.params.id
    });

    if(ticket) {
        res.status(200).send(ticket);
    } else {
        res.status(400).send({
            message: "Ticket not found!"
        });
    }
}