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

   const result = recipeFind();
   console.log(result)
    return(
        <div className="search-container">
        <form onSubmit={handleSubmit}>
          <input type="text" 
          name = 'searcedQuery'
           placeholder="Search..." 
           value={values.searcedQuery} 
           onChange={handleChange}/>
          <button type="submit">
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
    )
}