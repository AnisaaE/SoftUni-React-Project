import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Search } from "../Search/Search";

export function NavigationBar() {
  const { isAuth, userUsername } = useContext(AuthContext);

  return (
    <nav>
      <p>Welcome, {userUsername} </p>
      <Link to="/">
        <div className="logo">
          <img
            src="https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-hat-and-cooking-logo-png-image_6136205.png"
            alt="logo"
          />
          <span>Foodfly</span>
        </div>
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/catalog">Catalog</Link>

        {isAuth ? (
          <>
            <Link to="/create">Create Recipe</Link>
            <Link to="/logout">Logout</Link>
            <Link to="/profile">My Profile</Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
      <Search/>
    </nav>
  );
}
