const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(bodyParser.json());

const url = 'mongodb+srv://vincentfortis:wDgiB6DaO31gXSZK@cluster0.gxnrdho.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(url, { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("Database is connected....")
});

app.get('/', (req,res)=>{
res.send({message: 'Welcome to DressStore application.'})
})

app.use(cors());

const routes = require('./Routes/route');
app.use('/api', routes);

app.listen(3050, ()=>{
    console.log("Service is running...");
})