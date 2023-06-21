const express = require('express')
const app = express()
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
var routes = require('./route/routes');
const cors = require('cors');

app.use(cors());

app.listen(3000,function check(err)
{
    if(err)
    console.log("error")
    else
    console.log("started")
});


mongoose.connect("mongodb://127.0.0.1:27017/bookdb",{useNewUrlParser: true,  useUnifiedTopology: true })
.then(()=>{
  console.log("Mongodb connected");
})
.catch(()=>{
  console.log("Failed to connect");
})

app.use(express.json());
app.use(routes);