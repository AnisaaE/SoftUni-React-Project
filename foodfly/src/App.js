import "./App.css";

import { Route, Routes} from "react-router-dom";

import { AuthProvider } from "./context/authContext"; 
import { RecipeProvider } from "./context/RecipeContext";


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
import { CatalogFiltered } from "./components/Catalog/CatalogFiltered";
import { EditRecipe } from "./components/Edit";

function App() {

  return (
     <AuthProvider >
      <RecipeProvider>
        
        <NavigationBar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/type/:type" element={<CatalogFiltered />} />
          <Route path="/catalog/:recipeId" element={<Detail />} />
          <Route path="/catalog/:recipeId/edit" element={<EditRecipe />}/>
          <Route path="/profile" element={<Profile />} />

          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />

          
          {/* <Route path="/profile/:userId" element={Profile} /> */}
          <Route path="/create" element={<CreateRecipe />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
       
        <Footer />
       
        </RecipeProvider>
      </AuthProvider>
    
  );
}

export default App;
