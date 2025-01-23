const express= require("express");
const router= express.Router();

const {createComment} =require("../controllers/commentController");
const {createPost,getAllPosts} =require("../controllers/postController");
const {createLike, unLikePost} =require("../controllers/likeController");

router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts);
router.post("/likes/create",createLike);
router.post("/likes/unlike",unLikePost);

module.exports = router;