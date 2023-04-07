import "./Profile.css"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { RecipeContext } from "../../context/RecipeContext";
import { Link } from "react-router-dom";

export function Profile() {
const {getRecipesOfUser} = useContext(RecipeContext)   
const {userUsername, email, userId} = useContext(AuthContext)
const recipes = getRecipesOfUser(userId)
    return (
        <div className="profile">
  <div className="profile-data">
    <div className="profile_img">
      <div className="image">
        <img src='https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png' alt="img8" />
      </div>
    </div>
    <div className="personal">
      <div className="edit">
        <p>{userUsername}</p>
      </div>
      <div className="data">
        <span>{recipes.length}</span>
        <p>recipies</p>
      </div>
      <p className="email">{email}</p>
    </div>
  </div>

<div  className="recipes-photos">
  {recipes.map(x =>
                <div className="recipes-photos">
    
    <Link to={`/catalog/${x._id}`}>
    
      <img
        src={x.image}
        alt="recipe img"
      />
    </Link>
    
  </div> 
            )}</div>

            {recipes.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )}
 
</div>

    );
  }