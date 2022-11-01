const router = require("express").Router();
const Post = require('../models/Post');
// create post
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
})
// update posts
router.put("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        // if()
        await post.updateOne({ $set: req.body });
        res.status(200).json('post has een upated successfully')
    } catch (err) {
        res.status(500).json(err)
    }
})


// delete posts
// like a posts
// get a post
//  get timeline 


module.exports = router;
