import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";

export function Login({ onSubmitLogin }) {
  const { values, handleChange, handleSubmit, errors } = useForm(
    {
      email: "",
      password: "",
    },
    onSubmitLogin
  );

  return (
    <div className="container">
      <div className="main_div">
        <div className="title">Login Form</div>
        <form action="POST" onSubmit={handleSubmit}>
          <div className="input_box">
            <input
              type="text"
              name="email"
              value={values[email]}
              onChange={handleChange}
              placeholder="Email..."
              required
            />
            <div className="icon">
              <i className="fas fa-user" />
            </div>
          </div>
          <div className="input_box">
            <input
              type="password"
              name="password"
              value={values[password]}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <div className="icon">
              <i className="fas fa-lock" />
            </div>
          </div>
          <div className="input_box button_login">
            <input type="submit" value="Login" />
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
