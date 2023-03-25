import {Link} from 'react-router-dom'

export function Login() {
    return (
      <div className="container">
      <div className="main_div">
        <div className="title">Login Form</div>
        <form action="POST">
          <div className="input_box">
            <input type="text" name="email" placeholder="Email..." required />
            <div className="icon"><i className="fas fa-user" /></div>
          </div>
          <div className="input_box">
            <input type="password" name="password" placeholder="Password" required />
            <div className="icon"><i className="fas fa-lock" /></div>
          </div>
          <div className="input_box button_login">
            <input type="submit" defaultValue="Login" />
          </div>
          <div className="sign_up">
            Not a member? 
            <Link to="/register">Sign up now</Link>
          </div>
        </form>
      </div>
    </div>
    );
  }