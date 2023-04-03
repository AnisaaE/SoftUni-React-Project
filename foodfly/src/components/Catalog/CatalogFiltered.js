import "./Catalog.css"
import { CatalogItem } from "./CatalogItem";
import { useContext } from "react";
import { RecipeContext } from "../../context/RecipeContext";
import { useNavigate, useParams } from "react-router-dom";


export function CatalogFiltered() {
  const {getTypeRecipes} = useContext(RecipeContext)
  const { type } = useParams();
  const recipeType = getTypeRecipes(type)

    return (
      <>
      <div>
        <h2 className="recipe" >All {type} recipes</h2>
      <div className="recipe-catalog">  
      {recipeType.map(x =>
                <CatalogItem key={x._id} {...x} />
            )}

            {recipeType.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )}
      </div>  
    </div>
    </>
    );
  }