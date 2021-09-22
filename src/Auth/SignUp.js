import { Formik, Form } from "formik";
import { useState, useEffect } from "react";
import { useAuth } from "../Contexts/AuthProvider";
import { useVideo } from "../Contexts/VideoProvider";
import Spinner from "../Components/Spinner";
import * as Yup from "yup";
import Navbar from "../Components/Nav";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "./TextField";

const SignUp = () => {
  const { signupHandler, error, signupEmailErr, token } = useAuth();
  const { showLoader } = useVideo();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [passwordType, setPasswordType] = useState("password");

  useEffect(() => {
    token && navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const enableShowPassword = () => {
    setShowPassword((prev) => !prev);
    setPasswordType((prev) => (prev === "password" ? "text" : "password"));
  };

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const signupValidationSchema = Yup.object().shape({
    username: Yup.string()
      .min(4, "Username must be atleast 4 characters")
      .max(20, "Username must not exceed 20 characters length")
      .required("Username is required"),
    email: Yup.string()
      .email("Email must be a valid email")
      .required("Email is required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/,
        "Password must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
  });

  return (
    <div className="container login-container" id="empty-container-box">
      <Navbar />
      <div className="content">
        <main>
          <div className="empty-container-card">
            <h3>SIGN UP</h3>
            <p className="input-validation">{error}</p>
            <Formik
              initialValues={initialValues}
              validationSchema={signupValidationSchema}
              onSubmit={(values) => {
                signupHandler(values);
              }}
            >
              {(formik) => {
                const { isValid, dirty } = formik;
                return (
                  <Form>
                    <TextField
                      label="Username"
                      name="username"
                      type="text"
                      placeholder="Enter your username"
                    />
                    <TextField
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="Enter your email address"
                      emailError={signupEmailErr}
                    />
                    <TextField
                      label="Password"
                      name="password"
                      placeholder="Enter your password"
                      type={passwordType}
                      showPassword={showPassword}
                      enableShowPassword={enableShowPassword}
                    />
                    <TextField
                      label="Confirm Password"
                      name="confirmPassword"
                      placeholder="Confirm your password"
                      type={passwordType}
                      showPassword={showPassword}
                      enableShowPassword={enableShowPassword}
                    />
                    <button
                      type="submit"
                      className={`btn btn-primary ${
                        !(dirty && isValid && !showLoader) && "disabled"
                      }`}
                      disabled={!(dirty && isValid && !showLoader)}
                    >
                      {showLoader ? (
                        <Spinner type="ThreeDots" color=" #fff" height={20} />
                      ) : (
                        "SIGN UP"
                      )}
                    </button>
                  </Form>
                );
              }}
            </Formik>
            <p>
              Already a user?{" "}
              <u className="sign-up">
                <Link to="/login">LOGIN</Link>
              </u>{" "}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SignUp;
