import { IconButton } from "@material-ui/core";
import { useContext } from "react";
// import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { ImFacebook } from "react-icons/im";
import { useHistory } from "react-router-dom";
import { storeCtx } from "../pages/login/reducer";

import "./facebook.css";
export default function Facebook() {
  const { dispatch } = useContext(storeCtx);
  const history = useHistory();
  //   const [state, setState] = useState({ auth: false, name: "", picture: "" });
  const responseFacebook = (result) => {
    const token = result?.accessToken;
    try {
      dispatch({ type: "AUTH", data: { result, token } });
      history.push("/app/home");
    } catch (d) {
      console.log(d);
    }
  };
  const componentClicked = () => console.log("FACEBOOK CLICKE");
  return (
    <div>
      <FacebookLogin
        appId="153628660191867"
        onClick={componentClicked}
        callback={responseFacebook}
        autoLoad={true}
        fields="name,email,picture"
        textButton=""
        size="small"
        cssClass="facebook-login"
        icon={
          <IconButton className="signIn">
            <ImFacebook style={{ color: "blue" }} />
          </IconButton>
        }
      />
    </div>
  );
}
