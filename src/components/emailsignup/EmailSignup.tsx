import React from "react";
import { Field, Form, Formik } from "formik";
import axios from "axios";

import "./EmailSignup.css"

interface IFormValues {
    FNAME: string;
    LNAME: string;
    EMAIL: string;
    u: string;
    id: string;
}

const formURL = "https://dogmu-games.us6.list-manage.com/subscribe/post";

const formIdValues = {
    "u": "8bf9ae6b56f42d6d478f3901d",
    "id": "66e3cb92cf"
};

const initialFormValues: IFormValues = {
    FNAME: "",
    LNAME: "",
    EMAIL: "",
    ...formIdValues
};

const onValidateForm = values => {
    const errors = {};

    if (!values.FNAME) {
        errors["FNAME"] = "First Name is required";
    }

    if (!values.LNAME) {
        errors["LNAME"] = "Last Name is required";
    }

    if (!values.EMAIL) {
        errors["EMAIL"] = "Email is required";
    }

    return errors;
};

const onSubmitForm = (values, { setSubmitting }) => {
    axios.post(formURL, values)
        .then(() => {
            
        })
        .catch(() => {
            setSubmitting(false);
        });
};

const EmailSignup = () =>
    <div className="email-signup-block">
        <div>
            <h3 className="email-big-text">PLAY THE<br /><span className="email-big-text-em">FREE</span> DEMO</h3>
            <p className="small-text">You'll get it first when it is ready</p>
            <div className="divider" />
        </div>
        <Formik initialValues={initialFormValues}
            validate={onValidateForm}
            onSubmit={onSubmitForm}
        >
            {({
                errors,
                touched,
                isSubmitting
            }) =>
                <Form className="email-form">
                    <Field className={`email-form-input email-form-input-name ${errors.FNAME && touched.FNAME ? "email-form-invalid" : ""}`} name="FNAME" placeholder="First name*" disabled={!!isSubmitting} />
                    <Field className={`email-form-input email-form-input-name ${errors.LNAME && touched.LNAME ? "email-form-invalid" : ""}`} name="LNAME" placeholder="Last name*" disabled={!!isSubmitting} />
                    <Field className={`email-form-input email-form-input-email-field ${errors.EMAIL && touched.EMAIL ? "email-form-invalid" : ""}`} type="email" name="EMAIL" placeholder="Email*" disabled={!!isSubmitting} />
                    {isSubmitting
                        ? <p className="email-form-confirmation">Thank you!</p>
                        : <button className="email-form-submit" type="submit" disabled={isSubmitting}>
                            Submit
                        </button>}
                </Form>}
        </Formik>
    </div>;

export default EmailSignup;