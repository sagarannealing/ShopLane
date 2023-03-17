import React from "react";
import { useState } from "react";
import { Field, Form, Formik } from "formik";

import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { Badge } from "react-bootstrap";

function Signup() {
    const [intialSignupdata, setintialSignupdata] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirm_password: ""
    });
    let nav = useNavigate();
    

    function handleSubmit() {
        alert("Sign Up Successful")
    }
    const formSchema = Yup.object({
        firstname:Yup.string().min(3,"Please enter the first name ,more than 2 characters").required("Required"),
        lastname:Yup.string().min(3,"Please enter the last name ,more than 2 characters").required("Required"),
        email: Yup.string().email("Invalid Email Format").required("Required"),
        password: Yup.string().required("Required"),
        confirm_password:Yup.string().required("Required").when("password", {
            is: val => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
              [Yup.ref("password")],
              "Both password need to be the same"
            )
          })
    });

    return (
        <>
            <Formik
                initialValues={intialSignupdata}
                onSubmit={handleSubmit}
                validationSchema={formSchema}
            >
                {(props) => (
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-6">
                                <div className="wrapper">
                                    <h2>Signup</h2>
                                    <Form>
                                        {console.log(props)}
                                        <div className="form-group">
                                            <label htmlFor="firstname">First Name</label>
                                            <Badge bg="danger" text="light" className="error">
                                                {props.errors.firstname}
                                            </Badge>
                                            <Field
                                                type="text"
                                                id="email"
                                                className="form-control"
                                                name="firstname"
                                                placeholder="firstname"
                                            ></Field>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="lastname">Last Name</label>
                                            <Badge bg="danger" text="light" className="error">
                                                {props.errors.lastname}
                                            </Badge>
                                            <Field
                                                type="text"
                                                id="lastname"
                                                className="form-control"
                                                name="lastname"
                                                placeholder="lastname"
                                            ></Field>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">E-mail</label>
                                            <Badge bg="danger" text="light" className="error">
                                                {props.errors.email}
                                            </Badge>
                                            <Field
                                                type="text"
                                                id="email"
                                                className="form-control"
                                                name="email"
                                                placeholder="email"
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
                                                placeholder="password"
                                            ></Field>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="confirm_password">Confirm Password</label>
                                            <Badge bg="danger" text="light" className="error">
                                                {props.errors.confirm_password}
                                            </Badge>
                                            <Field
                                                type="password"
                                                id="confirm_password"
                                                className="form-control"
                                                name="confirm_password"
                                                placeholder="Confirm Password"
                                            ></Field>
                                        </div>

                                        <input
                                            type="submit"
                                            value="Signup"
                                            className="btn btn-primary btn-block"
                                            disabled={!props.isValid}
                                        />

                                        

                                        <br />
                                        <p className="text-center">
                                            <NavLink to="/">Have an Account? Login Here</NavLink>
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
export default Signup;
