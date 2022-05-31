import React from "react";
import "./form.scss";

const Form = ({ handleSubmit, onSubmit, autoComplete, register, children }) => {
  return (
    <form
      className="form"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete={autoComplete ? autoComplete : "off"}
      noValidate
      method="POST"
      // action="/success/"
      data-netlify="true"
      netlify-honeypot="got-ya"
    >
      <input type="hidden" name="form-name" value="contact-form" />
      <input
        type="hidden"
        name="formId"
        value="contact-form"
        // {...register("formId")}
      />
      <input
        autoComplete="none"
        name="hidden"
        type="text"
        style={{ display: "none" }}
      ></input>
      {children}
    </form>
  );
};

export default Form;
