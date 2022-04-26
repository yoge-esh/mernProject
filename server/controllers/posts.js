import PostMessage from "../models/postMessage.js";

// responsible for showing all the post that we have 
export const getposts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find({});
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
        
};


// responsible for creating a new post
export const createPost = async(req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
};