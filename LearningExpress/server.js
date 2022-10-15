const express = require("express");

console.log(typeof express);
const app = express();

/**
 * define the handler when someone makes a call
 * 
 * http://127.0.0.1:8000/hello
 */

app.get("/hello", (req,res) => {
    res.status(200).send({
        message : "Hello People!"
    })
});

const students = {
    1: {
        Vishwa: {
            name:"Vishwa",
            age: 99,
            subject: "Maths"
        },
        Mohan: {
            name: "Mohan",
            age: 97,
            subject: "Science"
        },
        Shivani: {
            name: "Shivani",
            age: 97,
            subject: "SST"
        },
        Jyoti: {
            name: "Jyoti",
            age: 97,
            subject: "Computers"
        }
    },
    2: {
        Vishwa: {
            name:"Vishwa",
            age: 99,
            subject: "Maths"
        },
        Shakshi: {
            name:"Shakshi",
            age: 10,
            subject: "Geography"
        },
        Akanksha: {
            name:"Akanksha",
            age: 9,
            subject: "Sanskrit"
        }
    }
}

/**
 * 
 * Code to read the Path Param
 * 
 * GET 127.0.0.1:8000/studentApp/classes/1/students/vishwa
 * 
 */
app.get("/studentApp/classes/:classId/students/:studentName", (req,res) => {

    /**
     * Reading the path param
     */

    // req.params -> Object that contains all the path param

    const classId = req.params.classId;
    console.log(classId);
    const studentName = req.params.studentName;
    console.log(studentName);

    return res.status(200).send({
        studentDetails: (students[classId])[studentName]
    });
});


/**
 * 
 * Code to read the Query Param
 * 127.0.0.1:8000/studentApp/classes?classId=1
 * 
 */

app.get("/studentApp/classes", (req,res) => {
    const classId = req.query.classId;

    if(classId) {
        res.status(200).send(students[classId]);
    } else {
        res.status(400).send({
            message: "Query params was not provided"
        })
    }
});


/**
 * Exercise
 * 
 */
 app.get("/studentApp/classes/:classId/students", (req,res) => {
    
    const classId = req.params.classId;
    const studentName = req.query.studentName;

    if(studentName) {
        res.status(200).send({
            studentDetails : (students[classId])[studentName]
        })
    } else {
        res.status(200).send({
            studentDetails : students[classId]
        })
    }
});


/**
 * 
 * Code to read the Request body
 * 
 * POST 127.0.0.1:8000/studentApp/classes/1/students
 * 
 * Above API would like to add student in a given class
 * 
 * Request Body
 * 
 * {
 *  name: "Alia",
 *  age: 27,
 *  subject: "Bollywood"
 * }
 * 
 */
app.use(express.json());
// Convert the json request to JS Object so that it could be inferred
app.post("/studentApp/classes/:classId/students", (req,res) => {

    const classId = req.params.classId;
    (students[classId])[req.body.studentName] = req.body;
    res.status(201).send(students[classId]);

});


app.listen(8000 , () => {
    console.log("Server started");
});