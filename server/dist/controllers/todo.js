import todoModel from '../models/todoSchema.js';
export const getAllTodos = async () => {
    try {
        const allTodos = await todoModel.find();
        return allTodos;
    }
    catch (error) {
        console.log(error);
    }
};
