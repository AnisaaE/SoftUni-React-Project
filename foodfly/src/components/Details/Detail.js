import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import {useService} from "../../hooks/serviceHook"
import { recipesServiceBuilder } from "../../services/recipesService";
import { AuthContext } from "../../context/authContext";

export function Detail() {
  const { userId } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});
  const recipeService = useService(recipesServiceBuilder)
  const navigate = useNavigate();

  useEffect(() => {
      recipeService.getOne(recipeId)
          .then(result => {
              setRecipe(result);
          })
  }, [recipeId]);

  const onCommentSubmit = async (e) => {
      e.preventDefault();

      const result = await recipeService.addComment(recipeId, {
          username,
          comment,
      });

      setRecipe(state => ({ ...state, comments: { ...state.comments, [result._id]: result } }));
      setUsername('');
      setComment('');
  };

  const isOwner = recipe._ownerId === userId;

  const onDeleteClick = async () => {
      await recipeService.delete(recipe._id);

      // TODO: delete from state

      navigate('/catalog');
  };


  return (
    <div class="containerDetails">
      <div class="active-recipe">
        <img class="active-recipe__img" src={recipe.image} alt="recipe.title" />
        <h3 class="active-recipe__title">{recipe.title}</h3>
      
        <ul class="active-recipe__metadata-list">
          <li>
            <strong>Method of preparation: </strong>{recipe.preparation}
          </li>
          <li>
            <strong>Cooking time: </strong>{recipe.timing} min
          </li>
          <li>
            <strong>Category: </strong>{recipe.type}
          </li>
          <li>
            <strong>Servings: </strong>{recipe.serving} people
          </li>
        </ul>

        {isOwner && (
        <div class="active-recipe__actions">
          <button class="active-recipe__edit-button">
            <Link to="/edit">Edit</Link>
          </button>
          <button class="active-recipe__delete-button">
            <Link to="/delete">Delete</Link>
          </button>
        </div>
        )}
      
        <div class="active-recipe__comments">
          <h4>Comments:</h4>
          <ul class="active-recipe__comment-list">
            {/* {recipe.comments.map(comment => (
        <li key='comment.id'>'comment.text'</li>
        ))} */}
          </ul>
          <div class="active-recipe__comments">
            <ul class="active-recipe__comment-list">
              {/* {recipe.comments.map(comment => (
              <li key='comment.id'>'comment.text'</li>
              ))} */}
            </ul>
            <form class="active-recipe__comment-form">
              <textarea
                class="active-recipe__comment-input"
                placeholder="Add a comment"
              ></textarea>
              <button class="active-recipe__comment-button">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
