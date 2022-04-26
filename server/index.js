import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';


// routes 
import postRourtes from './routes/posts.js';





const app = express();
app.use('/posts', postRourtes)



app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());



// connected to database 
const CONNECTION_URL = 'mongodb+srv://mern-project:mern-project@cluster0.wolqq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))).catch(err => console.log(err.message));

// mongoose.set('useFindAndModify', false); // not required in mongoose v4