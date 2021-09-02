import React, {  useState } from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';

import AccountService from "../api/AccountService";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({'username': false, 'email': false, 'password': false, 'regex': false})
  const classes = useStyles();
  const history = useHistory();
  

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(username, password);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      displayName: username,
      email: email,
      password: password,
    };
    console.log(user);

    AccountService.logInUser(user)
      .then((result) => {
        console.log(result.data.token);
        history.push("/");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  const validateRequired = (str, value) => {
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
        Login
      </Typography>
      <form className={classes.form} validate onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
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
          Login
        </Button>
        <Grid container>
          <Grid item>
            <Link href="/sign-up" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Login;
