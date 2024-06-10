import mongoose from 'mongoose';
const todoSchema = new mongoose.Schema({
    value: {
        type: String,
        required: true,
    },
    userID: {
        type: String,
        required: true,
    },
});
const todoModel = mongoose.model('todo', todoSchema);
export default todoModel;
