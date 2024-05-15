import React from 'react'
import { Link } from 'react-router-dom'


const Register = () => {
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
            <h1>Sign Up</h1>
            <p className="account-subtitle">Enter details to create your account</p>

            <form action="">
            <div className="form-group">
            <label>Username <span className="login-danger">*</span></label>
            <input className="form-control" type="text"/>
            <span className="profile-views"><i className="fas fa-user-circle"></i></span>
            </div>
            <div className="form-group">
            <label>Email <span className="login-danger">*</span></label>
            <input className="form-control" type="text"/>
            <span className="profile-views"><i className="fas fa-envelope"></i></span>
            </div>
            <div className="form-group">
            <label>Password <span className="login-danger">*</span></label>
            <input className="form-control pass-input" type="text"/>
            <span className="profile-views feather-eye toggle-password"></span>
            </div>
            <div className="form-group">
            <label>Confirm password <span className="login-danger">*</span></label>
            <input className="form-control pass-confirm" type="text"/>
            <span className="profile-views feather-eye reg-toggle-password"></span>
            </div>
            <div className=" dont-have">Already Registered?
            <Link to="/login">Login</Link>
            </div>
            <div className="form-group mb-0">
            <button className="btn btn-primary btn-block" type="submit">Register</button>
            </div>
            </form>

            <div className="login-or">
            <span className="or-line"></span>
            <span className="span-or">or</span>
            </div>

            <div className="social-login">
            <a href="#"><i className="fab fa-google-plus-g"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
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

export default Register