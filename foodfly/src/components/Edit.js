import useForm from "../hooks/useForm";
import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import { useService } from "../hooks/useService";
import { recipesServiceBuilder } from "../services/recipesService";
import { RecipeContext } from "../context/RecipeContext";

export function EditRecipe() {
  const {onRecipeEditSubmit} = useContext(RecipeContext)
  const { recipeId } = useParams();
  const recipeService = useService(recipesServiceBuilder);

  const { values, handleChange, handleSubmit, changeValues, errors } = useForm(
    {
      title: "",
      type: "",
      timing: "",
      portions: "",
      ingredients: "",
      image: "",
      preparation: "",
    },
    onRecipeEditSubmit
  );

  useEffect(() => {
    recipeService.getOne(recipeId).then((res) => changeValues(res));
  }, [recipeId]);

  return (
    <div className="container">
      <div className="main_div">
        <div className="title">Edit Post</div>
        <form onSubmit={handleSubmit}>
          <div className="input_box">
            <input
              type="text"
              name="title"
              value={values.title}
              onChange={handleChange}
              placeholder="Title"
              required
            />
            <div className="icon">
              <i className="fas fa-utensils" />
            </div>
          </div>
          <div className="input_box">
            <select name="type" value={values.type} onChange={handleChange}>
              <option value="Breakfast">Breakfast</option>
              <option value="Main-Meals">Main-Meals</option>
              <option value="Cakes">Cakes</option>
              <option value="Healthy">Healthy</option>
                <option value="Others">Others</option>
            </select>
          </div>
          <div className="input_box">
            <input
              type="text"
              name="timing"
              value={values.timing}
              placeholder="Timing"
              onChange={handleChange}
              required
            />
            <div className="icon">
              <i className="fas fa-clock" />
            </div>
            <span style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)' }}>(mins)</span>
          </div>
          <div className="input_box">
            <input
              type="text"
              name="portions"
              value={values.portions}
              onChange={handleChange}
              placeholder="Portion"
              required
            />
            <div className="icon">
              <i className="fas fa-users" />
            </div>
          </div>
          <div className="input_box">
            <input
              type="text"
              name="ingredients"
              value={values.ingredients}
              onChange={handleChange}
              placeholder="Ingredients"
              required
            />
            <div className="icon">
              <i className="fas fa-pepper-hot" />
            </div>
          </div>
          <div className="input_box">
            <input
              type="text"
              name="image"
              value={values.image}
              placeholder="Link image"
              onChange={handleChange}
              required
            />
            <div className="icon">
              <i className="fas fa-image" />
            </div>
          </div>
          <div className="input_box">
            <textarea
              name="preparation"
              value={values.preparation}
              onChange={handleChange}
              placeholder="Preparation"
              cols={30}
              rows={10}
              required
            />
            <div className="icon">
              <i className="fas fa-keyboard" />
            </div>
          </div>
          <div className="input_box button_login">
            <input type="submit" defaultValue="Create" />
          </div>
        </form>
      </div>
    </div>
  );
}
