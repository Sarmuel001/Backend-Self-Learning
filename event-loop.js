//would be using this to learn about event looping
const fs = require('fs');
const http = require('http');
const crypto = require('crypto');


// setTimeout(()=>{console.log('Practicing event loop'),0});
// setTimeout(()=>{console.log('Practicing event loop:Timer 2'),6000});
// setTimeout(()=>{console.log('Practicing event loop:Timer 3'),8000});
// setImmediate(()=>{(console.log('SetImmediatelyLine'))})

// fs.readFile('word.txt', ()=>{
//     console.log('checking code inside callback function')
//     console.log('-----------------------------')

//     setTimeout(()=>console.log('Practicing event loop'),0);
//     setTimeout(()=>console.log('Practicing event loop:Timer 2'),6000);
//     setTimeout(()=>console.log('Practicing event loop:Timer 3'),20000);
//     setImmediate(()=>(console.log('SetImmediatelyLine')))
//     crypto.pbkdf2('password', 'salt', 10000, 1024, 'sha512',()=>console.log("password encrypted"))
// })
// console.log('LastMan')

//event looping work effectively inside call back function rather than block code
 //let learn about event emitter
const EventEmitter = require('events');

class Sales extends EventEmitter{       // i felt like to explain and remind myself the class again. Sales is the parent class and EventEmitter is the superclass
    constructor(){
        super();                        //by running super we now get access to all the parent class
    }
}                                   
const myEmitter = new Sales();

myEmitter.on('newSale',()=>{
    console.log('There was a new sale')
})

myEmitter.on('newSale',()=>{
    console.log('Another Emiiter')
})
myEmitter.on('newSale',(Stock)=>{
    console.log(`New ${Stock} stocks is added`)
})
myEmitter.emit('newSale',9) //we have to emmit when using custom event in application 

//what if we want to make use of module, then all we have to do is to listen instead of emit. 
//Let do this:
const Server = http.createServer();
Server.on('request', (req, res)=>{
    console.log("Server connected successfully");
    console.log(req.url)
    res.end('Request recieved')
})
Server.on('request', (req, res)=>{
    console.log("New Request")
})


Server.on('close', (req, res)=>{
    console.log("Server successfully closed");
})

Server.listen(8000,'127.0.0.1',()=>{
    console.log('Waiting for the server')
})
