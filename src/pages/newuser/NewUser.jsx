import "./newuser.css";
import React, { useState } from "react";
import {
  Select,
  Radio,
  FormControlLabel,
  RadioGroup,
  FormControl,
  FormLabel,
  TextField,
  withStyles,
  InputLabel,
  makeStyles,
  MenuItem,
  Button,
} from "@material-ui/core";
import { userDetails } from "../../userContent";
import { genders } from "./../../userContent";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  radio: {
    "&$checked": {
      color: "black",
    },
  },
  checked: {},
}));

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
        outline: "none",
        borderColor: "black",
      },
    },
  },
})(TextField);

export default function NewUser() {
  const classes = useStyles();
  const [value, setValue] = useState("male");
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div>
          {userDetails.input.map((input, key) => {
            return (
              <div key={key} className="newUserItem">
                <label>{input.label}</label>
                <CssTextField
                  className="newUserInput"
                  type={input.type}
                ></CssTextField>
              </div>
            );
          })}
        </div>
        <div className="newUserRight">
          <div className="newUserRadio">
            <FormControl component="fieldset">
              <FormLabel
                component="legend"
                style={{
                  marginBottom: "10px",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "black",
                }}
              >
                Gender
              </FormLabel>
              <RadioGroup
                aria-label="Gender"
                name="gender1"
                onChange={handleChange}
                value={value}
              >
                {genders.input.map((input, key) => {
                  return (
                    <FormControlLabel
                      key={key}
                      value={input.value}
                      control={
                        <Radio
                          classes={{
                            root: classes.radio,
                            checked: classes.checked,
                          }}
                        />
                      }
                      label={input.label}
                    />
                  );
                })}
              </RadioGroup>
            </FormControl>
            <FormControl className={classes.select}>
              <InputLabel>Active</InputLabel>
              <Select>
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Button className="newUserCreate">Create</Button>
        </div>
      </form>
    </div>
  );
}
