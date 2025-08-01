const fs = require('fs');
const http = require('http'); //we added this one cos it is needed on server module which is line 26
const url = require('url')

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
// server.listen(8000, '127.0.0.1')  //we created a server here



////////////// the next thing to talk about is ROUTING
//ROUTING - routing is like you want to navigate path
// const server = http.createServer((req, res)=>{
//     const pathName =  req.url;
//     if(pathName === '/' || pathName === '/home'){
//         res.writeHead(200,{
//             'Content-type': 'text/html'
//         })
//         res.end(<h1>'Welcome Home, Glad you are here'</h1>)
//     } else if(pathName === '/shop'){
//         res.end('Shop items')
//     } else{
//         res.writeHead(404);
//         res.end('Error 404');
//     }
//     res.end('Hello from the server')
// })
// server.listen(8000, '127.0.0.1')

// const data = fs.readFileSync(`${__dirname}./questions.json`, 'utf-8');
//const objData = JSON.parse(data)    //we are just going to read the file inside the block where api is declared by just calling res.end(data)
                                    // Note this code works the same with the one declared or  read inside the code, but this one just read only once

const server2 = http.createServer((req, res)=>{
const pathName = req.url;
if(pathName === '/' || pathName === ' '){
    res.writeHead(200, {'Content-type':'text/html',})
    res.end('<h1>welcome home</h1>')
} else if(pathName === '/result'){
res.end('RESULT')  
} else if(pathName === '/shop'){
    res.end('Welcome to shop')
}else if(pathName === '/api'){
    fs.readFile('./questions.json', 'utf-8', (err, data) =>{
        const jFile = JSON.parse(data);
        console.log(data)
        res.end(data)        // if we cant open the json api file here we can also do that with readFileSync but its going to be outside of the block. check line 55
    })
}else{
    res.end('Go away Boss')
}
})
console.log('We are the world')
server2.listen(5000, '127.0.0.1')