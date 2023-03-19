export function CreateRecipe() {
    return (
      <div className="container">
        <div className="main_div">
          <div className="title">Create Post</div>
          <form action="POST">
            <div className="input_box">
              <input type="text" name="title" placeholder="Title" required="" />
              <div className="icon">
                <i className="fas fa-utensils" />
              </div>
            </div>
            <div className="input_box">
              <select name="type">
                <option value="">Select type</option>
                <option value="breakfast meals">breakfast meals</option>
                <option value="main meals">main meals</option>
                <option value="Cakes">Cakes</option>
                <option value="Healty meals">Healty meals</option>
                <option value="Fast meals">Fast meals</option>
              </select>
            </div>
            <div className="input_box">
              <input type="text" name="timing" placeholder="Timing" required="" />
              <div className="icon">
                <i className="fas fa-clock" />
              </div>
            </div>
            <div className="input_box">
              <input type="text" name="portions" placeholder="Portion" required="" />
              <div className="icon">
                <i className="fas fa-users" />
              </div>
            </div>
            <div className="input_box">
              <input
                type="text"
                name="ingredients"
                placeholder="Ingredients"
                required=""
              />
              <div className="icon">
                <i className="fas fa-pepper-hot" />
              </div>
            </div>
            <div className="input_box">
              <input type="text" name="image" placeholder="Link image" required="" />
              <div className="icon">
                <i className="fas fa-image" />
              </div>
            </div>
            <div className="input_box">
              <textarea
                name="preparation"
                placeholder="Preparation"
                cols={30}
                rows={10}
                defaultValue={""}
              />
              <div className="icon">
                <i className="fas fa-keyboard" />
              </div>
            </div>
            <div className="input_box button_login">
              <input type="submit" defaultValue="Create" />
            </div>
          </form>
        </div>
      </div>
      
    );
  }