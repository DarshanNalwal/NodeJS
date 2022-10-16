const express = require("express");
const app = express();

let count = 0;

function requestCount(req, res, next) {
    count++;
    console.log("Total request count so far is : "+count);

    // This will give control to next
    next();
}

function m1(req, res, next) {
    console.log("I am inside the first MW");
    next();
}

function m2(req, res, next) {
    console.log("I am inside the second MW");
    next();
}

function m3(req, res, next) {
    console.log("I am inside the third MW");
    next();
}

/**
 * requestCount -> m1 -> m2 -> m3 -> Any API handler to be called
 * 
 * Chaining
 */
// app.use(requestCount);
// app.use(m1);
// app.use(m2);
// app.use(m3);

function applicationLevelMW(req, res, next) {
    console.log("Application level MW");

    // Without the next, the control won't move over and the application is stuck
    next();
}

/**
 * 
 */
 app.use(applicationLevelMW);

app.get("/hello", (req,res)=>{
    res.status(200).send({
        message : "Hello World!"
    })
});

app.get("/students", [m1,m2,m3], (req,res)=>{
    res.status(200).send({
        message : "Hello World!"
    })
})


app.listen(8080,()=>{
    console.log("Application started");
})