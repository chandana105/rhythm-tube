import React from "react";
import { ErrorMessage, useField } from "formik";

export const TextField = ({
  label,
  enableShowPassword,
  showPassword,
  emailError,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <div
      className={`simple-input ${
        label === "Password || Confirm Password" && "password"
      }`}
    >
      <label htmlFor={field.name}>{label}</label>
      <input
        {...field}
        {...props}
        className={`${
          meta.touched && meta.error ? "validateError" : "noError"
        }`}
      />
      <div className="input-validation">{emailError}</div>
      {field.name === "password" || field.name === "confirmPassword" ? (
        <div className="password-input">
          <i
            className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
            onClick={enableShowPassword}
          ></i>
        </div>
      ) : null}
      <ErrorMessage
        component="div"
        name={field.name}
        className="input-validation"
      />
    </div>
  );
};
