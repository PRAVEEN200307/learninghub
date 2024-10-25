import mongoose from "mongoose";
const { Schema } = mongoose;

const studentInfo = new Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    status: String
})


const studenDetail = mongoose.model('student', studentInfo);
export default studenDetail
