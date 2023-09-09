import express, { response } from "express";
import path from "path"

const users = [];

const server = express();
//folder not file
//using middle wares
server.use(express.static(path.join(path.resolve(), "public")));
server.use(express.urlencoded({ extended: true}))


server.set("view engine", "ejs") // Setting up View engine

server.get("/getProducts", (req, res, next) => {
    // res.send("Hello")
    res.json({
        success : "True",
        product : [],
    })
})

server.get("/", (req, res, next) => {
    // res.sendFile(home)
    const pathlocation = path.resolve();
    res.sendFile(path.join(pathlocation, "./index")) // No need of html since static folder is set
})

server.get("/render", (req, res, next) => {
    res.render("index", {name : "Yash Gosavi"})
})

server.get("/success", (req, res, next) => {
    res.render("success")
})

server.get("/users", (req, res)=>{
    res.json({users,})
})

server.post("/contact", (req, res)=>{
    // console.log(req.body)
    users.push({userName : req.body.name, userEmail: req.body.email})
    res.redirect("/success")
})

server.get("/bad", (req, res, next) => {
    res.sendStatus(400).send("As I wish!")
})
server.listen(5000, () => {
    console.log("Server is working")
});



























// // console.log("Hello world How are you?") // Running JS locally on machine without browser
// // import gfName, { gfName2, gfName3, gfName4 } from "./features.js";
// // import * as temp from "./features.js"
// // import {generate} from "./features.js"
// // import path from "path"
// import fs from "fs"
// import http from "http"

// // console.log(temp);
// // console.log(generate())


// const home = fs.readFileSync("./index.html")
// const server = http.createServer((req, res)=>{
//     console.log(req.method)
//     if (req.url === "/about"){
//         res.end("<h1>My name is Yash</h1>");        
//     }
//     else if (req.url === "/"){
//         res.end("<h1>Welcome I am learning node js</h1>");        
//     }
//     else if (req.url === "/contact"){
//         res.end("<h1>yashcgosavi@gmail.com</h1>");        
//     }
//     else if (req.url === "/index"){
//         res.end("<h1>here is index.html</h1>");        
//     }
//     else if (req.url === "/home"){
//         res.end(home);        
//     }
//     else{
//         res.end("<h1>Page not Found !</h1>");        
//     }
// });
// server.listen(5000, ()=>{
//     console.log("server is working");
// });