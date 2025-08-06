//Setting up my first express and basic routing

const express = require('express');
const app = express();

const port = 3000;
app.get('/',(req,res)=>{
    res.status(200)
    .json({Name:'Sam Adebayo', SChool:'Jason UNiversity'})
})

//making a POST express.request
app.post('/', (req,res)=>{
    res.send('Hello postman Im posting for the first time from serverside')
    console.log('Posting...')
})

app.listen(port,()=>{
    console.log(`Server lunched on port: ${port}`)
})