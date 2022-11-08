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
    const student = await studentModel.create({
        name: "Vishwa",
        age: 99
    });

    console.log(student);
}