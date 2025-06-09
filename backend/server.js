import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import projectRouter from './routers/projectRouter.js';
import experienceRouter from './routers/experienceRouter.js';


import path from 'path';



const app = express();
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/nickmak', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});



//NEW BACKEND

app.use('/api/users', userRouter);
app.use('/api/projects', projectRouter); 
app.use('/api/experiences', experienceRouter); 

const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, '/frontend/build')));
app.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, './frontend/build/index.html'))
);


// app.get('/', (req, res) =>{
//     res.send('Server is ready');
// });

app.use((err, req, res, next) => {
    res.status(500).send({message: err.message});
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});