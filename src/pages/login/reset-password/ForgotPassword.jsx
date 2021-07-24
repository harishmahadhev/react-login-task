import React, { useContext } from "react";
import "../login.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import resetLogo from "../images/logo3.png";
import { forgotSchema } from "../signupSchema";
import { Button, TextField } from "@material-ui/core";
import * as api from "../../../api/index.js";
import { storeCtx } from "../reducer";
import { useState } from "react";

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotSchema),
  });

  const { dispatch } = useContext(storeCtx);

  const reset = async (formdata) => {
    try {
      const { data } = await api.forgot(formdata);
      dispatch({ type: "AUTH", data });
      setState(true);
    } catch (error) {
      console.log(error);
    }
  };

  const resetSubmit = (data) => {
    reset(data);
  };
  const [state, setState] = useState(false);
  return (
    <div className="login">
      <div className="loginContainer">
        <div className="loginLeft">
          <img src={resetLogo} className="loginImg" alt="" />
        </div>
        <div className="loginRight">
          <form
            className="loginForm"
            autoComplete="off"
            onSubmit={handleSubmit(resetSubmit)}
          >
            <h3 className="resetTitle">Forgot Password ?</h3>
            <h5 className="resetDetails">
              Enter your Email to send the password reset link
            </h5>
            <TextField
              className="loginInput"
              name="email"
              {...register("email")}
              placeholder="Enter Your Email"
              InputProps={{
                disableUnderline: true,
                style: {
                  fontSize: "13px",
                  fontFamily: "Roboto",
                  padding: "7px 0",
                },
              }}
            />
            {errors.email && (
              <div className="loginError">{errors.email.message}</div>
            )}
            <Button type="submit" className="loginButton">
              Send Link
            </Button>
            {state ? (
              <div className="resetMessage">Email sent Successfully</div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}
