const Post=require("../models/postModel");
const Like=require("../models/likeModel");

exports.createLike= async (req,res)=>{
    try{
        const {post,user}= req.body;
        const like= new Like({ 
            post,user
        });
        
        const createLike=await like.save();

        
        const updatedPost = await Post.findByIdAndUpdate(post,{$push: {likes:createLike._id}},{new:true})
        .populate("likes")
        .exec();

        res.json({
            post:updatedPost,
        });
    }
    catch(error){
        return res.status(500).json({
            error: "error while creating like",
        });
    }
}

exports.unLikePost = async (req,res)=>{
    try{
        const {post,like}= req.body;
        

        const updatedPost = await Post.findByIdAndUpdate(post,{$pull: {likes:like._id}},{new:true})
        .populate("post")
        .exec();

        const updatedLike = await Like.findByIdAndUpdate(like,{$pull: {post:post._id}},{new:true})
        .populate("likes") 
        .exec();

        res.json({
            post:updatedPost,
            like:updatedLike
        });
    }
    catch(error){
        return res.status(500).json({
            error: "error while deleting like",
        });
    }
}
