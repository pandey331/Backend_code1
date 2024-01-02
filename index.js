require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000

app.get('/',(req,res)=>{
    res.send("Hello World")
})

app.get('/about',(req,res)=>{
    res.send("It's me")
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please login for further processing</h1>')
})

app.listen(process.env.port,()=>{
    console.log(`Example app listening on port ${port}`)
})


