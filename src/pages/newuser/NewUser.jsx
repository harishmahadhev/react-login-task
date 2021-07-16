import "./newuser.css";
import React from "react";
import { TextField, withStyles } from "@material-ui/core";
import { userDetails } from "../../userContent";
const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "grey",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  },
})(TextField);

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        {userDetails.input.map((input, key) => {
          return (
            <div key={key} className="newUserItem">
              <label>{input.label}</label>
              <CssTextField
                type={input.type}
                placeholder={input.value}
              ></CssTextField>
            </div>
          );
        })}
      </form>
    </div>
  );
}
