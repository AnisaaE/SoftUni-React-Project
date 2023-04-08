import "./Details.css";

import { useEffect, useContext, useState, useReducer } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { useService } from "../../hooks/useService";
import { recipeReducer } from "../../reducers/recipeReducer";
import { recipesServiceBuilder } from "../../services/recipesService";
import { AuthContext } from "../../context/authContext";
import * as commentSevice from "../../services/comentsService";

import { AddComment } from "./AddComment/AddComment";
import { RecipeContext } from "../../context/RecipeContext";
import { DeleteRecipeModal } from "./DeleteConfirmation";
export function Detail() {
  const { userId, isAuth, userUsername } = useContext(AuthContext);
  const { deleteRecipe } = useContext(RecipeContext);
  const { recipeId } = useParams();
  const [recipe, dispatch] = useReducer(recipeReducer, {});
  const [isOpen, setIsOpen] = useState(false);

  const recipeService = useService(recipesServiceBuilder);
  const navigate = useNavigate();


  useEffect(() => {
    Promise.all([
      recipeService.getOne(recipeId),
      commentSevice.getAll(recipeId),
    ]).then(([recipeData, comments]) => {
      const recipeState = { ...recipeData, comments };
      dispatch({ type: "RECIPE_FETCH", payload: recipeState });
    });
  }, [recipeId]);

  const onCommentSubmit = async (values) => {
    const response = await commentSevice.create(recipeId, values.comment);
   
    dispatch({
      type: "COMMENT_ADD",
      payload: {...response,
        author: {
          username: userUsername,
          userId: userId 
        }}
    });
  };

  const isOwner = recipe._ownerId === userId;

  const onDelete = async () => {
    await recipeService.deleteRecipe(recipe._id);
    deleteRecipe(recipe._id);
    navigate("/catalog");
  };

  const confirmationDelete = () => {
    setIsOpen(true);
  };

  const onDeleteComment = async(commentId)=>{
    await commentSevice.deleteComment(commentId)
    dispatch({
      type: "COMMENT_DELETE",
      payload: commentId
    });

  }

  return (
    <div className="containerDetails">
      <div className="active-recipe">
        <img
          className="active-recipe__img"
          src={recipe.image}
          alt="recipe.title"
        />
        <h3 className="active-recipe__title">{recipe.title}</h3>

        <ul className="active-recipe__metadata-list">
          <li>
            <strong>Ingredients: </strong>
            {recipe.ingredients}
          </li>
          <li>
            <strong>Cooking time: </strong>
            {recipe.timing} min
          </li>
          <li>
            <strong>Category: </strong>
            <Link to={`/catalog/type/${recipe.type}`} className="catalog-link">
              {recipe.type}
            </Link>
          </li>
          <li>
            <strong>Servings: </strong>
            {recipe.portions} people
          </li>

          <li>
            <strong>Method of preparation: </strong>
            {recipe.preparation}
          </li>
        </ul>

        {isOwner && (
          <div className="active-recipe__actions">
            <button className="active-recipe__edit-button">
              <Link to={`/catalog/${recipeId}/edit`}>Edit</Link>
            </button>
            <button
              className="active-recipe__delete-button"
              onClick={confirmationDelete}
            >
              Delete
            </button>
            {isOpen && (
              <DeleteRecipeModal
                recipe={recipe}
                onDelete={onDelete}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            )}
          </div>
        )}

        <div className="active-recipe__comments">
          <h4>Comments:</h4>
          <ul className="active-recipe__comment-list">
            {recipe.comments &&
              recipe.comments.map((x) => (
                <li key={x._id} className="active-recipe__comment-item">
                  <p>*{console.log(x)} {x.comment}</p>

                  {isOwner || x._ownerId === userId ? (
                    <button
                      className="active-recipe__delete-button_comment"
                      onClick={() => onDeleteComment(x._id)}
                    >
                      Delete
                    </button>
                  ) : null
                  
                  }
                </li>
              ))}

            {!recipe.comments?.length && <li>No comments yet...</li>}
          </ul>

          {isAuth && <AddComment onCommentSubmit={onCommentSubmit} />}
        </div>
      </div>
    </div>
  );
}
