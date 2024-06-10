import mongoose from 'mongoose';
const imgSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true,
    }
});
const imgModel = mongoose.model('img', imgSchema);
export default imgModel;
