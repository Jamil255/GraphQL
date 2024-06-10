import imgModel from '../models/imgSchema.js';
export const getImageById = async (parent, arg) => {
    try {
        const image = await imgModel.findById(arg.id);
        return image;
    }
    catch (error) {
        console.log(error);
    }
};
