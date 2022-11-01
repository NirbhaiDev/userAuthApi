const router = require("express").Router();
const { deleteOne } = require("../models/Post");
const Post = require('../models/Post');
const User = require("../models/User");

// create post ------
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
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
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        await post.deleteOne();
        res.status(200).json('post deleted successfull')
    } catch (err) {
        console.log(err)
    }
})

// like a posts
router.put("/:id/like", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post.likes.includes(req.body.userId)) {
            await post.updateOne({ $push: { likes: req.body.userId } });
            res.status(200).json('post liked successfully')
        } else {
            await post.updateOne({ $pull: { likes: req.body.userId } });
            res.status(403).json('post disliked successfully')
        }
    } catch (err) {
        res.status(500).json(err)
    }
})

// get a post
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json(err)
    }
})

//  get timeline  
router.get("/timeline/all", async (req, res) => {
    try {
        const currentUser = await User.findById(req.body.userId);
        console.log(currentUser)
        const userPosts = await Post.find({ userId: currentUser._id });
        const friendPosts = await Promise.all(
            currentUser.followings.map(friendId => {
                Post.find({ userId: friendId })
            })
        )
        res.status(200).json(userPosts.concat(...friendPosts))
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router;
