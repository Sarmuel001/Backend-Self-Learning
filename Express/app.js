//Setting up my first express and basic routing

const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;
app.get('/',(req,res)=>{
    res.status(200)
    .json({Name:'Sam Adebayo', SChool:'Jason UNiversity'})
    
})

app.get('/',(req,res)=>{
    res.send('Hello from the server side')
})

//making a POST express.request
app.post('/', (req,res)=>{
    res.send('Hello postman Im posting for the first time from serverside')
    console.log('Posting...')
})

app.listen(port,()=>{
    console.log(`Server lunched on port: ${port}`)
})