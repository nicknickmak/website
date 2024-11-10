import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
    number: {type: Number, required: true, unique: true},
    name: {type: String, required: true, unique: true},
    role: { type: String, required: true},
    tech: { type: String, required: true},
    image: { type: String, required: true},
    date:{ type: String, required: true},
    dateShort: { type: String, required: true},
    description:{ type: String, required: true},
    link: { type: String, require: false},
    action: { type: String, require: true},
    active: { type: Boolean, require: true},
    },
    {
        timestamps: true,
    }
);
const Experience = mongoose.model('Experience', experienceSchema);

export default Experience;