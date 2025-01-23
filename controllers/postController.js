const Post=require("../models/postModel");

exports.createPost= async (req,res)=>{
    try{
        const {title,body}= req.body; 
        const post= new Post({ 
            title,body
        });
      
        const savePost=await post.save();

        res.json({
            post:savePost,
        });
    }
    catch(error){
        return res.status(500).json({
            error: "error while creating post",
        });
    }
}

exports.getAllPosts= async (req,res)=>{
    try{
        
        const allPosts = await Post.find().populate("likes").populate("comments").exec();

        res.json({
            allPosts
        });
    }
    catch(error){
        return res.status(500).json({
            error: "error while fetching all posts",
        });
    }
}