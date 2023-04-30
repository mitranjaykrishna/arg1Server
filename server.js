const express=require('express');
const mongoose=require('mongoose');
const morgan=require('morgan');
const path=require('path');
const app=express();

const PORT=8000;  //step1

const routes=require('./Routes/api');
// const MongoDB_URI="mongodb+srv://mitranjaykrishna:0TY4DRRiPUgifR19@learning.hwqyjma.mongodb.net/?retryWrites=true&w=majority"

//step 2
mongoose.connect(process.env.MongoDB_URI || 'mongodb://localhost:27017/reactMongo',{useNewUrlParser:true})

mongoose.connection.on('connected',()=>{
    console.log('Mongoose is connected!!!!')
})

//data parsing
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//step 3
if(process.env.NODE_ENV==='production'){
    app.use(express.static('../client/build'))
}

//http request logger
app.use(morgan('tiny'));
app.use('/',routes)



app.listen(PORT,()=>console.log(`Server is Running At ${PORT}`))



//0TY4DRRiPUgifR19