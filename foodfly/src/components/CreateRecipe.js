import { useContext } from "react";

import useForm from "../hooks/useForm";
import { RecipeContext } from "../context/RecipeContext";
import { Notification } from "./Notification/Notification";

export function CreateRecipe() {
  const {onCreateRecipe} = useContext(RecipeContext)
  const { values, handleChange, handleSubmit, errors,  showNotification } = useForm({
    title: '',
    type: '',
    timing: '',
    portions: '',
    ingredients: '',
    image: '',
    preparation: '',
  }, onCreateRecipe)
    return (
      <div className="container">
           <div className="flex-container">
    <div className="form-container"></div>
        <div className="main_div">
          <div className="title">Create Post</div>
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
            <select
              name="type"
              value={values.type}
              onChange={handleChange}
            >
              <option value="">Select type</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Main-Meals">Main-Meals</option>
              <option value="Cakes">Cakes</option>
              <option value="Healthy">Healthy</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="input_box">
              <input type="number" 
              name="timing"
              value = {values.timing}
               placeholder="Timing"
               onChange={handleChange}
               required />
              <div className="icon">
                <i className="fas fa-clock" />
              </div>
              <span style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)' }}>(mins)</span>

            </div>
            <div className="input_box">
              <input type="number"
               name="portions"
               value={values.portions}
               onChange={handleChange}
               placeholder="Portion"
                required />
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
              <input type="text" name="image"
              value= {values.image}
               placeholder="Link image"
               onChange={handleChange}
                required/>
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
              <input type="submit" value="Create" />
            </div>
          </form>
          </div>

          <div className="error-container">
      {showNotification && <Notification message={errors[0]} type="error"/>} 
      </div>
        </div>
      </div>
      
    );
  }