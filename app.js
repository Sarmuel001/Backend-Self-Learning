const fs = require('fs');
const http = require('http'); //we added this one cos it is needed on server module which is line 26


// File system Module - Part of BAckend Lesson 1

// const Nresult = fs.writeFileSync('./word.txt', 'Holy GHost another measure o')
// console.log(Nresult)
//but the above code is synchronous which is not advisable here on node
//because sync read data line by line, which is going to slow down a system
//thats where asynchronous comes in 

// ASYNC MODE

// fs.readFile('./start.txt', 'utf-8', (err, data)=>{
//     if(err){console.log('your file is hanging on the skye')}
//     fs.readFile('./word.txt', 'utf-8', (err, data4)=>{
//         console.log(data4)
//      fs.writeFile('./result.txt', `${data} \n ${data4}  \n ${'Ade of Toronto'}`,'utf-8', err =>{ //this line append both data1 & data2 into another file(result)
//         console.log('Your file is done')
//      })
// })})
// console.log('HAlleluyah I made it');

//here is the asychronous way of writing nodeJs COde

////////////////////////////////////////////////////////
//let look at SERVER MODULE - how to send and request from server
// const server = http.createServer((req, res)=>{
//     console.log(req.url)
//     res.end('Hello from the server')
// })
// server.listen(8000, '127.0.0.1')


////////////// the next thing to talk about is ROUTING
//ROUTING - routing is like you want to navigate path
const server = http.createServer((req, res)=>{
    const pathName =  req.url;
    if(pathName === '/' || pathName === '/home'){
        res.writeHead(200,{
            'Content-type': 'text/html'
        })
        res.end(<h1>'Welcome Home, Glad you are here'</h1>)
    } else if(pathName === '/shop'){
        res.end('Shop items')
    } else{
        res.writeHead(404);
        res.end('Error 404');
    }
    res.end('Hello from the server')
})
server.listen(8000, '127.0.0.1')















