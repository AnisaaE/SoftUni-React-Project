import './App.css';
import { Catalog } from './components/Catalog';
import { Home } from './components/Home';
import { NavigationBar } from './components/navigationBar';
import {Footer} from './components/Footer'
import { Register } from './components/Register';
import {Detail} from './components/Detail'
import {Error} from './components/Error'
import { Login } from './components/Login';
import {CreateRecipe} from './components/CreateRecipe'

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
