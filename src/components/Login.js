import React from "react";
import { useState } from "react";
import { Field, Form, Formik } from "formik";

import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";

function Login() {
  const [intialLogindata, setintialLogindata] = useState({
    email: "",
    password: "",
  });
  let nav = useNavigate();
  let showLabel = false;

  function handleSubmit(values, showError) {
    if (values.email === "sagar@123.com" && values.password === "123") {
      nav("/home", true);
    } else {
    }
  }
  const formSchema = Yup.object({
    email: Yup.string().email("Invalid Email Format").required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
    <>
      <Formik
        initialValues={intialLogindata}
        onSubmit={handleSubmit}
        validationSchema={formSchema}
      >
        {(props) => (
          <div className="container">
            <div className="row">
              <div className="col-lg-3"></div>
              <div className="col-lg-6">
                <div className="wrapper">
                  <h2>Login</h2>
                  <Form>
                    {console.log(props)}
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <Badge bg="danger" text="light" className="error">
                        {props.errors.email}
                      </Badge>
                      <Field
                        type="text"
                        id="email"
                        className="form-control"
                        name="email"
                        placeholder="EMAIL"
                      ></Field>
                    </div>

                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <Badge bg="danger" text="light" className="error">
                        {props.errors.password}
                      </Badge>
                      <Field
                        type="password"
                        id="password"
                        className="form-control"
                        name="password"
                        placeholder="Password"
                      ></Field>
                    </div>

                    <input
                      type="submit"
                      value="Login"
                      className="btn btn-primary btn-block"
                      disabled={!props.isValid}
                    />

                    <span hidden={!props.showError}>Login Unsuccessful</span>

                    <br />
                    <p className="text-center">
                      <NavLink to="/signUp">New User? Click Here</NavLink>
                    </p>
                  </Form>
                </div>
              </div>
              <div className="col-lg-3"></div>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}
export default Login;
