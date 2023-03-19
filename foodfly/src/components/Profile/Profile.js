import "./Profile.css"
export function Profile() {
    return (
        <div className="profile">
  {/* Start Profile Personal Data Section */}
  <div className="profile-data">
    <div className="profile_img">
      <div className="image">
        <img src="/static/images/person.png" alt="img8" />
      </div>
    </div>
    <div className="personal">
      <div className="edit">
        {/* User Username */}
        <p>Username</p>
      </div>
      <div className="data">
        {/* Total Number of Photos by the User */}
        <span>1</span>
        <p>recipies</p>
      </div>
      {/* User Email Address */}
      <p className="email">email</p>
    </div>
  </div>
  {/* Start Uploaded Photos Section */}
  <div className="pet-photos">
    {/* Link to Uploaded Pet Photo */}
    <a href="#">
      {/* Pet Photo */}
      <img
        src="https://hips.hearstapps.com/hmg-prod/images/wide-pans-0-1491930046.jpg?resize=480:*"
        alt="recipe img"
      />
    </a>
    
  </div>
</div>

    );
  }