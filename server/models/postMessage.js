import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: String,
    type: String,
    message: String,
    creator: String,
    tag: [String],
    selectFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;