
const mongoose=require('mongoose');

//Schemma
const Schema=mongoose.Schema;
const CertificateSchema=new Schema({
    title: String,
    body:String,
    image:String,
    date:{
        type:String,
        default:Date.now() 
    }
})

//Mode
const CertificatePost=mongoose.model('CertificatePost',CertificateSchema);


module.exports=CertificatePost;