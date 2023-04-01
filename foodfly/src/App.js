import "./App.css";

import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { AuthProvider } from "./context/authContext"; 

import { recipesServiceBuilder } from "./services/recipesService";

import { Catalog } from "./components/Catalog/Catalog";
import { Home } from "./components/Home/Home";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { Footer } from "./components/Footer/Footer";
import { Login } from "./components/Login/Login";
import { Logout } from "./components/Logout/Logout";
import { Register } from "./components/Register";
import { Detail } from "./components/Details/Detail";
import { ErrorPage } from "./components/Error/Error";
import { CreateRecipe } from "./components/CreateRecipe";
import About from "./components/About/About";
import { Profile } from "./components/Profile/Profile";
import { TypesOfRecipies } from "./components/TypesOfRecipies/TypesOfRecipies";
import { EditRecipe } from "./components/Edit";

function App() {
   const navigate = useNavigate()
  const recipeService = recipesServiceBuilder()//auth.accessToken
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    recipeService.getAll()
    .then(res=>{setRecipes(res)})
  },[]);

  const onRecipeEditSubmit = async (values) => {
    const result = await recipeService.edit(values._id, values);

    setRecipes(state => state.map(x => x._id === values._id ? result : x))

    navigate(`/catalog/${values._id}`);
}


  const validateValues = (values) => {
    const errors = [];
  
    for (const key in values) {
      if (values.hasOwnProperty(key) && values[key] === "") {
        errors.push(`${key} is required`);
      }
    }
  
    return errors;
  };
  
  const onCreateRecipe= async (data)=>{
    let newRecipe = await recipeService.create(data)
    setRecipes(state=>[...state, newRecipe])

    navigate("/catalog")
  }

  return (
     <AuthProvider >
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog recipes={recipes} />} />
          <Route path="/catalog/:recipeId" element={<Detail />} />
          <Route path="/catalog/:recipeId/edit" element={<EditRecipe onEditRecipe={onRecipeEditSubmit}/>}/>
				 {/* <Route path="/catalog/:recipeId/delete" element={DeleteClass}/> */}
          <Route path="/profile" element={<Profile />} />

          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />

          {/* <Route path="/profile/:userId" element={Profile} /> */}
          <Route path="/create" element={<CreateRecipe onCreateRecipe={onCreateRecipe}/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </AuthProvider>
    
  );
}

export default App;
