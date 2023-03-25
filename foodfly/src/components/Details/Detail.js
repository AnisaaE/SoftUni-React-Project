import {Link} from 'react-router-dom'

export function Detail() {
    return (
        <div class="containerDetails">

        <div class="active-recipe">
          <img class="active-recipe__img" src='resim.jpt' alt="recipe.title" />
          <h3 class="active-recipe__title">'recipe.title'</h3>
          <h4 class="active-recipe__publisher">
            Publisher: <span>'recipe.publisher'</span>
          </h4>
          <ul class="active-recipe__metadata-list">
            <li><strong>Method of preparation: </strong>'recipe.preparation'</li>
            <li><strong>Cooking time: </strong>'recipe.time' min</li>
            <li><strong>Country of origin: </strong>'recipe.type'</li>
            <li><strong>Servings: </strong>'recipe.serving' people</li>
          </ul>
          <div class="active-recipe__comments">
            <h4>Comments:</h4>
            <ul class="active-recipe__comment-list">
              {/* {recipe.comments.map(comment => (
              <li key='comment.id'>'comment.text'</li>
              ))} */}
            </ul>
            <form class="active-recipe__comment-form">
              <textarea class="active-recipe__comment-input" placeholder="Add a comment"></textarea>
              <button class="active-recipe__comment-button">Submit</button>
            </form>
          </div>
          <button class="active-recipe__button">
            <Link to="/">Go Home</Link>
          </button>
        </div>
      </div>
    );
  }