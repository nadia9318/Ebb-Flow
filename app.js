
// Creating a server
const express = require("express");


const app = express();

// Connect front end to the back end.
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function(){
    console.log("Server is running on port 3000.")
});
