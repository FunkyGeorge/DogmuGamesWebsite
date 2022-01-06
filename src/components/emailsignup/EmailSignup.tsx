import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe"

import "./EmailSignup.css"

const formURL = "//dogmu-games.us6.list-manage.com/subscribe/post?u=8bf9ae6b56f42d6d478f3901d&id=66e3cb92cf";

const CustomForm = ({ status, onValidated }) => {
    let email, fname, lname;
    const submit = () =>
      email &&
      fname &&
      lname &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        FNAME: fname.value,
        LNAME: lname.value
      });
  
    return (
      <div className="email-form">
        <input
          className="email-form-input email-form-input-name"
          ref={node => (fname = node)}
          type="text"
          placeholder="First name*"
          disabled={status === "success"}
        />
        <input
          className="email-form-input email-form-input-name"
          ref={node => (lname = node)}
          type="text"
          placeholder="Last name*"
          disabled={status === "success"}
        />
        <input
          className="email-form-input email-form-input-email-field"
          ref={node => (email = node)}
          type="email"
          placeholder="Email*"
          disabled={status === "success"}
        />
        <br />
        {status === "success"
            ? <p className="email-form-confirmation">Thank you!</p>
            : <button className="email-form-submit" onClick={submit}>
                Submit
                </button>}
      </div>
    );
  };

const EmailSignup = () =>
    <div className="email-signup-block">
        <div>
            <h3 className="email-big-text">PLAY THE<br /><span className="email-big-text-em">FREE</span> DEMO</h3>
            <p className="small-text">You'll get it first when it is ready</p>
            <div className="divider" />
        </div>
        <MailchimpSubscribe
            url={formURL}
            render={({ subscribe, status }) => (
            <div>
                <CustomForm
                    status={status}
                    onValidated={formData => subscribe(formData)}
                />
            </div>
            )}
        />
    </div>;

export default EmailSignup;