// Step 1: Import the express modules   
const express = require('express');

// Step 2: Create an Express application instance    
const app = express();

//Body Parsing
app.use(express.json());


const studentInfo = [
    { name: "Tejiri", age: 26, grade: "A" },
    { name: "Tobore", age: 24, grade: "B" },
    { name: "Kevwe" , age: 22, grade: "C" }
];

app.get("/all-data",(req, res) => {
    res.json(studentInfo);
});

// Step 3: Define a route handler for GET requests to /
app.get('/', function(req, res) {
    res.send('Hello World! Welcome to Express.js');
});

app.get("/about" , (request, response) => {
    response.send("This is the about page")
})

app.get("/contact" , (request, response) => { 
    response.send("This is the contact page")
})  



// Step 4: Start listening on a specific port (e.g., 1999)
app.listen(1999, function() {
    console.log('Server is up and running');
});

