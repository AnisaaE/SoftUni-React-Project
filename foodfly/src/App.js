import { Route, Routes } from "react-router-dom";

import "./App.css";
import { Catalog } from "./components/Catalog";
import { Home } from "./components/Home/Home";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { Footer } from "./components/Footer";
import { Register } from "./components/Register";
import { Detail } from "./components/Recipe/Detail";
import { Error } from "./components/Error";
import { Login } from "./components/Login";
import { CreateRecipe } from "./components/Recipe/CreateRecipe";

function App() {
  return (
    <>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Catalog />} />
        <Route path="/details/:recipeId" element={<Detail />} />
        {/* <Route path="/edit/:recipeId" element={EditClass}/>
				<Route path="/delete/:recipeId" element={>DeleteClass}/> */}

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* <Route path="/profile/:userId" component={Profile} /> */}
        <Route path="/create" component={<CreateRecipe />} />
     
      </Routes>
      <Footer />
    </>
  );
}

export default App;
