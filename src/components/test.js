import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <div className="wrapper">
            <h2>Login</h2>
            <hr />
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="form-control"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                />
              </div>

              <input
                type="submit"
                value="Login"
                className="btn btn-primary btn-block"
              />
            </form>
            <br />
            <p className="text-center">
              <Link to="/register">New User? Click Here</Link>
            </p>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    </div>
  );
};
export default LoginPage;