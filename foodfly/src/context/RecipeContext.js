import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { recipesServiceBuilder } from '../services/recipesService';

export const RecipeContext = createContext();

export const RecipeProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const recipeService = recipesServiceBuilder()
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        recipeService.getAll()
        .then(res=>{setRecipes(res)})
      },[]);
    
      const onRecipeEditSubmit = async (values) => {
        const result = await recipeService.edit(values._id, values);
    
        setRecipes(state => state.map(x => x._id === values._id ? result : x))
    
        navigate(`/catalog/${values._id}`);
    }
    
      
      const onCreateRecipe= async (data)=>{
        let newRecipe = await recipeService.create(data)
        setRecipes(state=>[...state, newRecipe])
    
        navigate("/catalog")
      }
    
      const deleteRecipe = (recipeId) => {
        setRecipes(state => state.filter(recipe => recipe._id !== recipeId));
    };

    const getRecipe = (recipeId) => {
        return recipes.find(recipe => recipe._id === recipeId);
    };

    const contextValues = {
        recipes,
        onCreateRecipe,
        onRecipeEditSubmit,
        deleteRecipe,
        getRecipe,
    };

    return (
        <RecipeContext.Provider value={contextValues}>
            {children}
        </RecipeContext.Provider>
    );
};


