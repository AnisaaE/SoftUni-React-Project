import { Route, Routes } from "react-router-dom";

import "./App.css";
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


function App() {
  


  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/catalog" element={<Catalog/>} />
        <Route path="/catalog/:recipeId" element={<Detail/>} />
        {/* <Route path="/catalog/:recipeId/edit" element={EditClass}/>
				<Route path="/catalog/:recipeId/delete" element={>DeleteClass}/> */}
        <Route path="/profile" element={<Profile/>} />

        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />

        {/* <Route path="/profile/:userId" element={Profile} /> */}
        <Route path="/create" element={<CreateRecipe/>} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
