const mongoose = require("mongoose");
const studentModel = require("./models/student.model");
/**
 * Need to establish the connection with the mongodb
 */

mongoose.connect("mongodb://localhost/demodb", () => {
    console.log("Connected to MongoDB");
}, err => {
    console.log("Error happened :", err.message);
});

dbOperation();

/**
 * I would like to do some DB inserts
 * 
 * I would like to insert some records inside the students collection
 */

async function dbOperation() {
    /**
     * Code to insert some student in the db
     */
    try {
        const student = await studentModel.create({
            name: "Vishwa",
            age: 17,
            email: "abc123456@xyz",
            subjects: ["Maths", "English"],
            address: {
                lane1: "Lane1",
                lane2: "Lane2",
                street: "AC-23",
                country: "India",
                pinCode: 560049
            }
        });
    
        console.log(student);
    } catch(e) {
        console.log(e.message);
    }
    
}