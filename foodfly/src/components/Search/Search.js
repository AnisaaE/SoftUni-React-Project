export function Search(){
    return(
        <div className="search-container">
        <form action="#">
          <input type="text" placeholder="Search..." />
          <button type="submit">
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
    )
}