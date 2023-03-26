import "./Catalog.css"
import { CatalogItem } from "./CatalogItem";
import { TypesOfRecipes } from "./components/TypesOfRecipies/TypesOfRecipies";

export function Catalog({recipes}) {
    return (
      <>
      <TypesOfRecipes/>
      <div>
        <h2 className="recipe" >All recipes</h2>
      <div className="recipe-catalog">  
      {recipes.map(x =>
                <CatalogItem key={x._id} {...x} />
            )}

            {recipes.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )}
      </div>  
    </div>
    </>
    );
  }