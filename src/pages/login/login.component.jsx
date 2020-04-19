import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selector';
import { signOutStart } from '../../redux/user/user.action';

import LoginForm from '../../components/login-form/login-form.component';
import Button from '@material-ui/core/Button';

import './login.styles.scss';

const Login = ({ currentUser, signOutStart, fromPath }) => {
  return (
    <div className="login">
      {currentUser ? (
        <div className="field-margin">
          <Button
            variant="contained"
            color="secondary"
            className="margin"
            onClick={signOutStart}
          >
            Log out
          </Button>
        </div>
      ) : (
        <LoginForm fromPath={fromPath} />
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
