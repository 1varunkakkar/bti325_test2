var express = require("express"); // Include express.js module
var app = express();
var data = require("./test2_moduleA.js")

var path = require("path"); // include moduel path to use __dirname, and function path.join()

var HTTP_PORT = process.env.PORT || 8080;  // || : or

// call this function after the http server starts listening for requests
function onHttpStart(){
    console.log("Express http server listening on: " + HTTP_PORT);
}

// setup a 'route' to listen on the default url path (http://localhost)
app.get("/", function(req, res){
    let resText = "<h2> Declaration</h2><br>";
    resText += "<p>I acknowledge the College's academic integrity policy - and my own integrity - remain in effect<br> whether my work is done remotely or onsite. Any test or assignment is an act of trust between<br> me and my instructor, and especially with my classmates... even when no one is watching. I<br> declare I will not break that trust.";
    resText += "<p>Name: <mark>Varun Kakkar</mark></p>"
    resText += "<p>Student Number: <mark>124524216</mark></p>"
    resText += "<a href = '/BSD'> Click to visit BSD Students </a> <br><br>"; 
    resText += "<a href = '/highGPA'> Click to see who has the highest GPA </a> <br>"; 
    res.send(resText);
});
app.use((req,res)=>{
    res.status(404).send("Error 404: page not found.");
 });
 
// app.listen(HTTP_PORT, onHttpStart);
data.init().then(() => { app.listen(HTTP_PORT, onHttpStart()) }).catch(() => {
    console.log("Server not responding!");
});