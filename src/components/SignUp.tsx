import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";

import { signUp } from "../redux/user/reducer";
import { isThereAnyError } from "../util/validation";
import { UserCredentials, UserErrors } from "../redux/types";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const initialFormValues: UserErrors = {username: false, email: false, password: false, regex: false};

const Signup: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(initialFormValues);
  const classes = useStyles();
  const dispatch = useDispatch();
  
  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    const credentials: UserCredentials = {
      displayName: username,
      email: email,
      password: password,
    };

    const anyErrors = isThereAnyError(error);

    if (anyErrors) {
      alert("Incorrect format in your data, please check it.");
      return;
    }
    dispatch(signUp(credentials));
  };

  const validateRequired = (str: string, value: string) => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let values = {...error}
    !value ? values[str]= true : values[str]= false
    if(str === 'email'){
      !value.match(regex) ? values['regex']= true : values['regex']= false 
    }

    setError(values)
  }

  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          onChange={(e) => {
            setUsername(e.target.value)
            validateRequired('username', username)
          }}
          onBlur={(e) => {validateRequired('username', username)}}
          error={error.username}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={(e) => {
            setEmail(e.target.value);
            validateRequired('email', email)
          }}
          onBlur={(e) => {validateRequired('email', email)  }}
          error={error.email || error.regex}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={(e) => {
            setPassword(e.target.value);
            validateRequired('password', password)
          }}
          onBlur={(e) => {validateRequired('password', password) }}
          error={error.password}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default Signup;
