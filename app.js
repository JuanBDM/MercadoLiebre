const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;


app.get("/", (req, res)=> {
    res.sendFile(path.join(__dirname, "./views/home.html"))
});

app.get("/login", (req, res)=> {
    res.sendFile(path.join(__dirname, "./views/login.html"))
});

app.get("/register", (req, res)=> {
    res.sendFile(path.join(__dirname, "./views/register.html"))
});

app.listen (process.env.PORT || 3000, function (){
    console.log("servidor corriendo en el puerto 3000");
}); 
