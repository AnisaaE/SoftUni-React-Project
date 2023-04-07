import { TypesOfRecipies } from "./TypesOfRecipies/TypesOfRecipies";
import "./Catalog.css"
import { CatalogItem } from "./CatalogItem";
import { useContext } from "react";
import { RecipeContext } from "../../context/RecipeContext";
import { Notification } from "../Notification/Notification";

export function Catalog() {
  const {recipes, notification} = useContext(RecipeContext)
    return (
      <>
      <TypesOfRecipies/>
     {notification && <Notification message={'Recipe created successfully'} type="success" duration= '6000'/>}
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