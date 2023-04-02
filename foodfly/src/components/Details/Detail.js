import "./Details.css";

import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { useService } from "../../hooks/useService";
import { recipesServiceBuilder } from "../../services/recipesService";
import { AuthContext } from "../../context/authContext";
import * as commentSevice from "../../services/comentsService";

import { AddComment } from "./AddComment/AddComment";
import { RecipeContext } from "../../context/RecipeContext";

export function Detail() {
  const { userId, isAuth, username } = useContext(AuthContext);
  const {deleteRecipe} = useContext(RecipeContext)
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});

  const recipeService = useService(recipesServiceBuilder);
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
       recipeService.getOne(recipeId),
       commentSevice.getAll(recipeId)
      ])
      .then(
      ([recipeData, comments]) => {
        setRecipe({...recipeData, comments });
      }
    );
    recipeService.getOne(recipeId).then((result) => {
      setRecipe(result);
    });
  }, [recipeId]);

  const onCommentSubmit = async (values) => {

    const respons = await commentSevice.create(recipeId, values.comment);
   console.log(respons)
    // setRecipe(state => ({ ...state, comments: { ...state.comments, [result._id]: result } }));
    // setUsername('');
    // setComment('');
  };

  const isOwner = recipe._ownerId === userId;

  const onDeleteClick = async () => {
  //  const result = confirm(`Are you sure you want to delete ${recipe.title}`);

   // if (result) {
        await recipeService.delete(recipe._id);

        deleteRecipe(recipe._id);

        navigate('/catalog');
  //  }
  };

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
            <strong>Method of preparation: </strong>
            {recipe.preparation}
          </li>
          <li>
            <strong>Cooking time: </strong>
            {recipe.timing} min
          </li>
          <li>
            <strong>Category: </strong>
            {recipe.type}
          </li>
          <li>
            <strong>Servings: </strong>
            {recipe.portions} people
          </li>
        </ul>

        {isOwner && (
          <div className="active-recipe__actions">
            <button className="active-recipe__edit-button">
              <Link to={`/catalog/${recipeId}/edit`}>Edit</Link>
            </button>
            <button
              className="active-recipe__delete-button"
              onClick={onDeleteClick}
            >
              Delete
            </button>
          </div>
        )}

        <div className="active-recipe__comments">
          <h4>Comments:</h4>
          <ul className="active-recipe__comment-list">

            {
            recipe.comments ?
              recipe.comments.map((x) => (
                <li key={x._id}>
                  <p>
                     {x.comment}
                  </p>
                </li>
              )
            ) : (
              <li>No comments yet...</li>
            )}
          </ul>

          {isAuth && <AddComment onCommentSubmit={onCommentSubmit} username= {username} />}
        </div>
      </div>
    </div>
  );
}
