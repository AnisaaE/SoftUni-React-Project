import {Link} from "react-router-dom"
import './Home.css'

export function Home() {
    return (
        <div className="background-image">
        <div className="container">
          <h1 className="heading">"A recipe has no soul. You as the cook must bring soul to the recipe."</h1>
          <Link className="button" to="/catalog">Go to Catalog</Link>
    
        </div>
      </div>
    );
  }