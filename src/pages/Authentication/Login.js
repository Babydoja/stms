import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div>
        <div className="main-wrapper login-body">
        <div className="login-wrapper">
        <div className="container">
        <div className="loginbox">
        <div className="login-left">
        <img className="img-fluid" src="assets/img/login.png" alt="Logo"/>
        </div>
        <div className="login-right">
        <div className="login-right-wrap">
        <h1>Welcome to Parach</h1>
        <p className="account-subtitle">Need an account? 
        {/* <a href="register.html">Sign Up</a> */}
        <Link to="/register">Sign up</Link>
        </p>
        <h2>Sign in</h2>
        {/* <form action="https://preschool.dreamstechnologies.com/template/index.html"> */}
        <form action="https://parachictacademy.com.ng/">
        <div className="form-group">
        <label>Username <span className="login-danger">*</span></label>
        <input className="form-control" type="text"/>
        <span className="profile-views"><i className="fas fa-user-circle"></i></span>
        </div>
        <div className="form-group">
        <label>Password <span className="login-danger">*</span></label>
        <input className="form-control pass-input" type="text"/>
        <span className="profile-views feather-eye toggle-password"></span>
        </div>
        <div className="forgotpass">
        <div className="remember-me">
        <label className="custom_check mr-2 mb-0 d-inline-flex remember-me"> Remember me
        <input type="checkbox" name="radio"/>
        <span className="checkmark"></span>
        </label>
        </div>
        {/* <a href="forgot-password.html">Forgot Password?</a> */}
        <Link to='/forget'>Forgot Password?</Link>
        </div>
        <div className="form-group">
        <button className="btn btn-primary btn-block" type="submit">Login</button>
        </div>
        </form>

        <div className="login-or">
        <span className="or-line"></span>
        <span className="span-or">or</span>
        </div>

        <div className="social-login">
        <Link to='https://www.google.com/'><i className="fab fa-google-plus-g"></i></Link>
        <Link to='https://web.facebook.com/'><i className="fab fa-facebook-f"></i></Link>
        <Link to='https://twitter.com/'><i className="fab fa-twitter"></i></Link>
        <Link to='https://www.linkedin.com/'><i className="fab fa-linkedin-in"></i></Link>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Login