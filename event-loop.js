//would be using this to learn about event looping
const fs = require('fs');
const http = require('http');
const crypto = require('crypto')

// setTimeout(()=>{console.log('Practicing event loop'),0});
// setTimeout(()=>{console.log('Practicing event loop:Timer 2'),6000});
// setTimeout(()=>{console.log('Practicing event loop:Timer 3'),8000});
// setImmediate(()=>{(console.log('SetImmediatelyLine'))})

fs.readFile('word.txt', ()=>{
    console.log('checking code inside callback function')
    console.log('-----------------------------')

    setTimeout(()=>console.log('Practicing event loop'),0);
    setTimeout(()=>console.log('Practicing event loop:Timer 2'),6000);
    setTimeout(()=>console.log('Practicing event loop:Timer 3'),20000);
    setImmediate(()=>(console.log('SetImmediatelyLine')))
    crypto.pbkdf2('password', 'salt', 10000, 1024, 'sha512',()=>console.log("password encrypted"))
})
console.log('LastMan')

//event looping work effectively inside call back function rather than block code
