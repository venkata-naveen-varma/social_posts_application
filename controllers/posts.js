import postMessage from '../models/postMessages.js';

export const getPosts = async (req, res) => {
    try{
        const postMessages = await postMessage.find()
        res.send(200).json(postMessages)
    }catch(e){
        res.send(404).json({message: e.message})
    }
}

export const createPosts = async (req, res) => {
    const post = req.body;
    const newPost = new postMessage(post);
    try{
        await newPost.save();
        res.status(201).json(newPost)
    }catch(e){
        res.status(409).json({message: e.message})
    }
}