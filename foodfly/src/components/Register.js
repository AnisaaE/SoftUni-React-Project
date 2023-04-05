import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import useForm from "../hooks/useForm";
import { Notification } from "./Notification/Notification";

export function Register() {
  const { onSubmitRegister } = useContext(AuthContext);
  
  const { values, handleChange, handleSubmit, errors,  showNotification } = useForm({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  },onSubmitRegister);
  return (
    <div className="container">
       <div className="flex-container">
    <div className="form-container"></div>
      <div className="main_div">
   
        <div className="title">Registration</div>
        <form action="POST" onSubmit={handleSubmit}>
          <div className="input_box">
            <input
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
              placeholder="Name"
              required
            />
            <div className="icon">
              <i className="fas fa-user" />
            </div>
          </div>
          <div className="input_box">
            <input
              type="text"
              name="email"
              value={values.email}
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
              value={values.password}
              onChange={handleChange}
              placeholder="Create password"
              required
            />
            <div className="icon">
              <i className="fas fa-lock" />
            </div>
          </div>
          <div className="input_box">
            <input
              type="password"
              name="repeatPassword"
              value={values.repeatPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              required
            />
            <div className="icon">
              <i className="fas fa-lock" />
            </div>
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
      <div className="error-container">
      {showNotification && <Notification message={errors[0]} type="error" />} 
      </div>
    </div>
    </div>
  );
}
