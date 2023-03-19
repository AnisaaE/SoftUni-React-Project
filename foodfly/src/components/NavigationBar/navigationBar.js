import {Link} from 'react-router-dom'

export function NavigationBar() {
    return (
        <nav>
           <Link to="/">
        <div className="logo">
          <img src="https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-hat-and-cooking-logo-png-image_6136205.png" alt="logo" />
          <span>Foodfly</span>
        </div>
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/catalog">Catalog</Link>
          <Link to="/create">Create Recipe</Link>
          <Link to="/login">Login</Link>
          <Link to="/logout">Logout</Link>
          <Link to="/register">Register</Link>
          <Link to="/profile">My Profile</Link>
        </div>
        <div className="search-container">
          <form action="#">
            <input type="text" placeholder="Search..." />
            <button type="submit"><i className="fa fa-search" /></button>
          </form>
        </div>
      </nav>
    );
  }