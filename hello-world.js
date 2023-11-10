// Create a file named hello-world.js and server

const http = require('http');
const server = http.createServer((req,res)=>{
    res.end('<h1>Hello Node!!!!</h1>\n')
});
server.listen(3000);
// Question 3
const fs = require('fs');
const data = fs.readFile('welcome.txt', (err,data)=>{
    if (err) throw(err)
    console.log(data.toString());

});
