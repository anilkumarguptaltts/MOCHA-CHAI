const express = require('express');
const app = express();
const port = 8000;

app.use('/user', require('./routes/user'));
//app.use('/api/article-list', require('./routes/user'));

// app.use('/user',(req,res)=>{
//     res.send("hello");
// })
module.exports = app.listen(port,()=>{
    console.log("APP IS RUNNING");
});