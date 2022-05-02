import React, {useState} from "react";
import { Typography, Button, Paper, TextField } from "@material-ui/core";
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';  

// import style
import useStyles from "./style";
import { createPost } from "../../actions/posts";

const Form = () =>{
    const [postData, setPostData] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile : ""
    });
    const classes = useStyles();
    const dispatch = useDispatch();


    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createPost(postData));   
        console.log("submit");
    };

    const clear = () => {

    };


    return(
        <Paper className={classes.paper}>
            <form autocomplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} >
                <Typography variant="h6" className={classes.title}> Creating a memory </Typography>
                <TextField  name="creator"  label="Creator"  variant="outlined"  fullWidth value={postData.creator} onChange={(e) => setPostData({...postData, creator: e.target.value})} />
                <TextField  name="title"  label="Title"  variant="outlined"  fullWidth value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})} />
                <TextField  name="message"  label="Message"  variant="outlined"  fullWidth value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})} />
                <TextField  name="tags"  label="Tags"  variant="outlined"  fullWidth value={postData.tags} onChange={(e) => setPostData({...postData, tags: e.target.value})} />
                <div className={classes.fileInput}>
                    <FileBase 
                        type="file"
                        multiple={false}
                        onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
                    />
                </div>
                <Button type="submit" className={classes.buttonSubmit} varient='contained' color="primary" size="large" fullWidth> Submit </Button>
                <Button onClick={clear} varient='contained' color="secondary" size="small" fullWidth> clear </Button>
            </form>
        </Paper>
    )
}

export default Form;