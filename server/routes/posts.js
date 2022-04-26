import express from "express";

// importing controllers files 
import { getposts, createPost } from "../controllers/posts.js";

const router = express.Router();

router.get('/', getposts);
router.post('/', createPost);
    
export default router;