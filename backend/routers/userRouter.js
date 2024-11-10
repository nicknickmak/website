import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import User from '../models/userModel.js';
 
const userRouter = express.Router();

userRouter.get(
    '/seed', 
    expressAsyncHandler(async (req, res) =>{
        //users inside data.js will be inserted into mongodb
        await User.remove({}); //removes users everytime
        const createdUsers = await User.insertMany(data.users);
        res.send({createdUsers});
    })
);

export default userRouter;