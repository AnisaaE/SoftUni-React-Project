import useForm from "../../hooks/useForm";
import { useContext } from "react";
import { RecipeContext } from "../../context/RecipeContext";


export function Search(){
  const { recipeFind }= useContext(RecipeContext)
  const { values, handleChange, handleSubmit, errors} = useForm(
    {
     searcedQuery:''
    },
    recipeFind
  );
    return(
        <div className="search-container">
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search..." value={values.searcedQuery} onChange={handleChange}/>
          <button type="submit">
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
    )
}