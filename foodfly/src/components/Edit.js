import useForm from "../hooks/formHook";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useService } from "../hooks/serviceHook";
import { recipesServiceBuilder } from "../services/recipesService";

export function EditRecipe({ onEditRecipe }) {
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
    onEditRecipe
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
              required=""
            />
            <div className="icon">
              <i className="fas fa-utensils" />
            </div>
          </div>
          <div className="input_box">
            <select name="type" value={values.type} onChange={handleChange}>
              <option value="breakfast meals">breakfast meals</option>
              <option value="main meals">main meals</option>
              <option value="Cakes">Cakes</option>
              <option value="Healty meals">Healty food</option>
              <option value="Fast meals">Fast meals</option>
            </select>
          </div>
          <div className="input_box">
            <input
              type="text"
              name="timing"
              value={values.timing}
              placeholder="Timing"
              onChange={handleChange}
              required=""
            />
            <div className="icon">
              <i className="fas fa-clock" />
            </div>
          </div>
          <div className="input_box">
            <input
              type="text"
              name="portions"
              value={values.portions}
              onChange={handleChange}
              placeholder="Portion"
              required=""
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
              required=""
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
              required=""
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
              defaultValue={""}
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
