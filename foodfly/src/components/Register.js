import {Link} from 'react-router-dom'

export function Register() {
    return (
      <div className="container">
      <div className="main_div">
        <div className="title">Registration</div>
        <form action="POST">
          <div className="input_box">
            <input type="text" name="name" placeholder="Name" required />
            <div className="icon"><i className="fas fa-user" /></div>
          </div>
          <div className="input_box">
            <input type="text" name="email" placeholder="Email..." required />
            <div className="icon"><i className="fas fa-user" /></div>
          </div>
          <div className="input_box">
            <input type="password" name="password" placeholder="Create password" required />
            <div className="icon"><i className="fas fa-lock" /></div>
          </div>
          <div className="input_box">
            <input type="password" name="repeatPassword" placeholder="Confirm password" required />
            <div className="icon"><i className="fas fa-lock" /></div>
          </div>
          <div className="input_box button_login">
            <input type="submit" defaultValue="Register" />
          </div>
          <div className="sign_up">
            Already have an account?  
            <Link to="/login">Login now</Link>
          </div>
        </form>
      </div>
    </div>
    );
  }