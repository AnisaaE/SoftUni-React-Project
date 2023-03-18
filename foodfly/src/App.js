import './App.css';
import { Catalog } from './components/Catalog';
import { Home } from './components/Home/Home';
import { NavigationBar } from './components/NavigationBar/NavigationBar';
import {Footer} from './components/Footer'
import { Register } from './components/Register';
import {Detail} from './components/Recipe/Detail'
import {Error} from './components/Error'
import { Login } from './components/Login';
import {CreateRecipe} from './components/Recipe/CreateRecipe'

function App() {
  return (
    <body>
    <NavigationBar/>
    <Home/>
    <Catalog/>
    <Detail/>
    <Error/>
    <Register/>
    <Login/>
    <CreateRecipe/>
    <Footer/>
    
    </body>
  );
}

export default App;
