import { IconButton, InputAdornment, TextField } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
export const TextInput = ({
  name,
  type,
  className,
  placeholder,
  handleShowPassword,
}) => (
  <TextField
    name={name}
    type={type}
    required
    className={className}
    placeholder={placeholder}
    InputProps={{
      disableUnderline: true,
      style: {
        fontSize: "13px",
        fontFamily: "Roboto",
        padding: "7px 0",
      },
      endAdornment: name === "password" && (
        <InputAdornment>
          <IconButton disableRipple onClick={handleShowPassword}>
            {type === "password" ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      ),
    }}
  />
);
