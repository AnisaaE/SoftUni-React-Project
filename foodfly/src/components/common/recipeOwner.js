import { useParams, Outlet, Navigate } from 'react-router-dom';

import { useContext } from 'react';
import { RecipeContext } from '../../context/RecipeContext';
import { AuthContext } from '../../context/authContext';

export const RecipeOwner = ({
    children,
}) => {
    const { recipeId } = useParams();
    const { getRecipe } = useContext(RecipeContext);
    const { userId } = useContext(AuthContext);

    const currentRecipe = getRecipe(recipeId);

    if (currentRecipe && currentRecipe._ownerId !== userId) {
        return <Navigate to={`/catalog/${recipeId}`} replace />
    }

    return children ? children : <Outlet />
};