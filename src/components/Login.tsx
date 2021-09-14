import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { logIn } from '../redux/user/reducer';
import { isThereAnyError } from '../util/validation';
import { UserCredentials, UserErrors } from '../redux/types';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const initialFormValues: UserErrors = {
  username: false, 
  email: false, 
  password: false, 
  regex: false
};

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
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
      alert('Please enter your data in the correct format.');
      return;
    }
    dispatch(logIn(credentials));
  };
  const validateRequired = (str: string, value: string) => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let values = {...error};
    !value ? values[str]= true : values[str]= false;
    if(str === 'email'){
      !value.match(regex) ? values['regex']= true : values['regex']= false; 
    }
    setError(values);
  }
  
  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        Log In
      </Typography>
      <form className={classes.form}  onSubmit={handleSubmit}>
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
          helperText={error.username ? "Please enter a valid username." : ""}
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
          helperText={error.email || error.regex ? "Please enter a valid email address." : ""}
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
          helperText={error.password ? "Please enter a valid password." : ""}
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
            <Link to="/sign-up">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Login;
