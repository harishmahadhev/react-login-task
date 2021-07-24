import { useContext } from "react";
// import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { ImFacebook } from "react-icons/im";
import { useHistory } from "react-router-dom";
import { storeCtx } from "../reducer";

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
  const componentClicked = () => console.log("FACEBOOK CLICK");
  return (
    <div>
      <FacebookLogin
        appId="153628660191867"
        onClick={componentClicked}
        callback={responseFacebook}
        autoLoad={true}
        fields="name,email,picture"
        textButton={<ImFacebook style={{ color: "blue" }} />}
        size="small"
        cssClass="facebook-login"
      />
    </div>
  );
}
