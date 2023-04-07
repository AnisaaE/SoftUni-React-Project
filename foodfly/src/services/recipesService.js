import { requestBuilder } from "./requests";

const baseUrl = "http://localhost:3030/data/recipes";

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
      return result;
  };

  const addComment = async (recipeId, data) => {
    const result = await request.post(`${baseUrl}/${recipeId}/comments`, data);

    return result;
  };

  const edit = (recipeId, data) => request.put(`${baseUrl}/${recipeId}`, data);

  const deleteRecipe = (recipeId) => request.delete(`${baseUrl}/${recipeId}`);

  const recipeFind = async (value) => {
    const encodedValue = encodeURIComponent(value);

    request.get(``);
  };

  return {
    getAll,
    getOne,
    create,
    edit,
    addComment,
    deleteRecipe,
    recipeFind,
  };
};
