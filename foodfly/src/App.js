import "./App.css";

import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import { AuthContext } from "./context/authContext";

import { recipesServiceBuilder } from "./services/recipesService";
import { authServiceBuilder } from "./services/userService";


import { Catalog } from "./components/Catalog/Catalog";
import { Home } from "./components/Home/Home";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { Footer } from "./components/Footer/Footer";
import { Register } from "./components/Register";
import { Detail } from "./components/Details/Detail";
import { ErrorPage } from "./components/Error/Error";
import { Login } from "./components/Login/Login";
import { CreateRecipe } from "./components/CreateRecipe";
import About from "./components/About/About";
import { Profile } from "./components/Profile/Profile";
import { TypesOfRecipies } from "./components/TypesOfRecipies/TypesOfRecipies";
import { Logout } from "./components/Logout/Logout";

function App() {
 
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});
  const authService = authServiceBuilder(auth.accessToken);
  const recipeService = recipesServiceBuilder(auth.accessToken)
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    recipeService.getAll()
    .then(res=>{setRecipes(res)})
  },[]);
  

  const onSubmitRegister = async (data) => {
    const { repeatPassword, ...registerData } = data;
    if (repeatPassword !== registerData.password) {
        return;
    }
    console.log(registerData)

    try {
        const result = await authService.register(registerData);

        setAuth(result);

        navigate('/');
    } catch (error) {
        console.log(error);
    }
  };

  const onSubmitLogin = async (data) => {
    try {
      let result = await authService.login(data);
      setAuth(result);
      navigate('/');

    } catch (err) {
      // throw new Error(err);
    }
  };

  const onLogout= async () =>{
     await authService.logout();
     setAuth({})
  }

  const context = {
    onSubmitRegister,
    onSubmitLogin,
    onLogout,
    token: auth.accessToken,
    userUsername: auth.username,
    isAuth: !!auth.accessToken,
  };

  const onCreateRecipe= async (data)=>{
    let newRecipe = await recipeService.create(data)
    setRecipes(state=>[...state, newRecipe])

    navigate("/catalog")
  }

  return (
     <AuthContext.Provider value={context}>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog recipes={recipes} />} />
          <Route path="/catalog/:recipeId" element={<Detail />} />
          {/* <Route path="/catalog/:recipeId/edit" element={EditClass}/>
				<Route path="/catalog/:recipeId/delete" element={>DeleteClass}/> */}
          <Route path="/profile" element={<Profile />} />

          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />

          {/* <Route path="/profile/:userId" element={Profile} /> */}
          <Route path="/create" element={<CreateRecipe />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </AuthContext.Provider>
    
  );
}

export default App;
