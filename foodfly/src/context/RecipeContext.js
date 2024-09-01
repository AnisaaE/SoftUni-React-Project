import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { recipesServiceBuilder } from "../services/recipesService";
import { recipeValidation } from "../validations/validations";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const navigate = useNavigate();
  const recipeService = recipesServiceBuilder();
  const [notification, setNotification] = useState(false);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    recipeService.getAll().then((res) => {
      setRecipes(res);
    });
  }, []);

  const onRecipeEditSubmit = async (values) => {
    const errors = recipeValidation(values);
    const isValidData = !errors ? true : false;
    if (isValidData) {
      try {
         const result = await recipeService.edit(values._id, values);
        setRecipes((state) => 
        state.map((x) => (x._id === values._id ? result : x))
      );
      navigate(`/catalog/${values._id}`);
      } catch (error) {
        return ["There is a problem... Please, try again later!"];
      }
    } else {
      return errors;
    }
  };

  const onCreateRecipe = async (data) => {
    const errors = recipeValidation(data);
    const isValidData = !errors ? true : false;
    if (isValidData) {
      try {
        let newRecipe = await recipeService.create(data);
        setRecipes((state) => [...state, newRecipe]);
        setNotification(true);
        navigate("/catalog");
        setNotification(false)
      } catch (error) {
        return ["There is a problem... Please, try again later!"];
      }
    } else {
      return errors;
    }
  };

  const deleteRecipe = (recipeId) => {
    setRecipes((state) => state.filter((recipe) => recipe._id !== recipeId));
  };

  const getRecipe = (recipeId) => {
    return recipes.find((recipe) => recipe._id === recipeId);
  };
  const getTypeRecipes = (type) => {
    return recipes.filter((recipe) => recipe.type === type);
  };

  const getRecipesOfUser = (userId) =>{
    return recipes.filter((recipe) => recipe._ownerId === userId);
  }

  const recipeFind = (value)=>{
  
  }

  const contextValues = {
    recipes,
    onCreateRecipe,
    onRecipeEditSubmit,
    deleteRecipe,
    getRecipe,
    getTypeRecipes,
    notification,
    getRecipesOfUser,
    recipeFind
  };

  return (
    <RecipeContext.Provider value={contextValues}>
      {children}
    </RecipeContext.Provider>
  );
};
