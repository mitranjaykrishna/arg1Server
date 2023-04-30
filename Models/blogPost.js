
const mongoose=require('mongoose');

//Schemma
const Schema=mongoose.Schema;
const BlogPostSchema=new Schema({
    title: String,
    body:String,
    image:String,
    date:{
        type:String,
        default:Date.now() 
    }
})

//Mode
const BlogPost=mongoose.model('BlogPost',BlogPostSchema);


module.exports=BlogPost;