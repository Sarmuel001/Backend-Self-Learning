const fs = require('fs')
const server = require('http').createServer();

server.on('request',(req,res)=>{

    const readable = fs.createReadStream('result.txt');
    readable.pipe(res);
    console.log('Reading file')
    //readableSource.pipe(writableableDest)
})
server.on('request', (req,res)=>{
    console.log(req.url)
    console.log('Connected successfully')
})
server.listen(8000, '127.0.0.1' ,()=>{
    console.log('waiting for the server')
})

// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.end('Hello!');
// });

// server.on('connection', (socket) => {
//   console.log('New connection!');
// });

// server.listen(3000);
