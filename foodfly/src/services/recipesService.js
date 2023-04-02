import { requestBuilder } from "./requests";

const baseUrl = 'http://localhost:3030/data/recipes';

export const recipesServiceBuilder = () => {
    const request = requestBuilder();

    const getAll = async () => {
        const result = await request.get(baseUrl);
        const recipes = Object.values(result);
    
        return recipes;
    };
    
    const getOne = async (recipeId) => {
        const result = await request.get(`${baseUrl}/${recipeId}`);
    
        return result;
    };
    
    const create = async (recipeData) => {
        const result = await request.post(baseUrl, recipeData);
    
        console.log(result);
    
        return result;
    };
    
    const addComment = async (recipeId, data) => {
        const result = await request.post(`${baseUrl}/${recipeId}/comments`, data);
    
        return result;
    };

    const edit = (recipeId, data) => request.put(`${baseUrl}/${recipeId}`, data);

    const deleteGame = (recipeId) => request.delete(`${baseUrl}/${recipeId}`);


    return {
        getAll,
        getOne,
        create,
        edit,
        addComment,
        delete: deleteGame,
    };
}