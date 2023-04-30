const express=require('express');

const router=express.Router();

const BlogPost=require('../Models/blogPost');

// const CertificatesPost=require('../Models/certificateData');

//Routes
router.get('/',(req,res)=>{
    // const data={
    //     userName: 'acccc',
    //     age: 5
    // }

    BlogPost.find({})
    .then((data)=>{
        console.log('Data', data);
        res.json(data);
    })
    .catch((error)=>{
        console.log('error:', error);
    });
})

router.post('/save',async(req,res)=>{
    // console.log("Body: "+req.body);

    const data=req.body
    const newBlogPost=new BlogPost(data)

    //.save
    const result=await newBlogPost.save()

    if(result)
    {
        res.json({msg:"data Save succesfylly"})
    }
    else{
        res.status(500).json({msg:"failed"})

    }

    


    
});



router.get('/name',(req,res)=>{
    const data={
        userName: 'petr',
        age: 5
    }
    res.json(data);
})


module.exports=router;