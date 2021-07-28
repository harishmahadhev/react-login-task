import "../login.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import resetLogo from "../images/logo3.png";
import { forgotSchema } from "../signupSchema";
import { Button, TextField } from "@material-ui/core";

export default function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(forgotSchema),
  });

  const resetSubmit = (data) => {
    console.log(data);
  };
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
          </form>
        </div>
      </div>
    </div>
  );
}
