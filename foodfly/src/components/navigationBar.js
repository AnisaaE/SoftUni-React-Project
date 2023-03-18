export function NavigationBar() {
    return (
        <nav>
        <div className="logo">
          <img src="https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-hat-and-cooking-logo-png-image_6136205.png" alt="logo" />
          <span>Foodfly</span>
        </div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Catalog</a>
          <a href="#">Login</a>
          <a href="#">Logout</a>
          <a href="#">Register</a>
          <a href="#">My Profile</a>
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