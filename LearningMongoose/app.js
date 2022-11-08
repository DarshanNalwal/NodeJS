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
    // try {
    //     const student = await studentModel.create({
    //         name: "Vishwa",
    //         age: 17,
    //         email: "abc123456@xyz",
    //         subjects: ["Maths", "English"],
    //         address: {
    //             lane1: "Lane1",
    //             lane2: "Lane2",
    //             street: "AC-23",
    //             country: "India",
    //             pinCode: 560049
    //         }
    //     });
    
    //     console.log(student);
    // } catch(e) {
    //     console.log(e.message);
    // }


    /**
     * I want to read some dcuments
     * 
     * With the help of id
     */
    const student = await studentModel.findById("636a5b3c487785cc195459fa");

    console.log(student);

    const students = await studentModel.find({name : "Vishwa"});
    console.log(students);

    const vishwaStudent = await studentModel.findOne({name : "Vishwa"});
    console.log(vishwaStudent);
}