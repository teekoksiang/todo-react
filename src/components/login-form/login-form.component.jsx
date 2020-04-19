import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.action';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const LoginForm = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="login-form">
      <div>
        <Typography variant="h5">Already have an account</Typography>
        <Typography variant="subtitle2">
          Login with email and password
        </Typography>
      </div>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div className="field-margin">
          <TextField
            fullWidth
            label="Email"
            color="secondary"
            value={email}
            onChange={handleChange}
            type="email"
            required
          />
        </div>
        <div className="field-margin">
          <TextField
            fullWidth
            label="Password"
            color="secondary"
            value={password}
            onChange={handleChange}
            type="password"
            required
          />
        </div>
        <div className="field-margin">
          <Button disabled type="submit" variant="contained" color="secondary">
            Login
          </Button>
        </div>
        <div className="field-margin">
          <Button
            onClick={googleSignInStart}
            variant="contained"
            color="secondary"
          >
            Login with Google
          </Button>
        </div>
      </form>
      <div>
        <Typography variant="body1">Don't have an account yet?</Typography>
        <Typography variant="h6">Register now</Typography>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(LoginForm);
