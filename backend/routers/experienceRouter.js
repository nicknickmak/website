import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Experience from '../models/experienceModel.js';

const experienceRouter = express.Router();

experienceRouter.get(
    '/',
    expressAsyncHandler(async (req, res) => {
        const experiences = await Experience.find({});
        res.send(experiences);
    })
);

experienceRouter.get(
    '/seed', 
    expressAsyncHandler(async(req, res) => {
        //users inside data.js will be inserted into mongodb
        await Experience.remove({}); //removes users everytime
        const createdExperiences = await Experience.insertMany(data.experiences);
        res.send({createdExperiences});
    })
);

experienceRouter.get(
    '/:id', 
    expressAsyncHandler(async (req, res) => {
        const experience = await Experience.findById(req.params.id);
        if (experience) {
            res.send(experience);
        } else {
            res.status(404).send({ message: 'Experience Not Found'});
        }
    })
);

export default experienceRouter;