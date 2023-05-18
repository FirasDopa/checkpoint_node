console.log("Hello World")

const fs = require("fs")
const message = fs.readFileSync("./text.txt")

console.log(message.toString())

const {response} = require("express")
const http = require("http")
http.createServer((request,response) => {
    response.end("<h1>Hello Node!!!!</h1>")
    
}).listen(1996)



