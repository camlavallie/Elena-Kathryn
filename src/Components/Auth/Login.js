import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
// import { setAlert } from '../../actions/alert';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const Login = ({login, isAuthenticated}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value});

  const onSubmit = e => {
    e.preventDefault();
    login(email, password)
  }
  if(isAuthenticated){
    return <Redirect to="/dashboard"/>
  }
  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-dark">Sign In</h1>
       
        <form className="form" onSubmit={e => onSubmit(e)}>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={e => onChange(e)}
            value={email}
            required
          />

          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={e => onChange(e)}
              minLength="6"
              required
            />
          </div>
          <input type="submit" className="btn btn-dark" value="Login" />
        </form>
      </section>
    </Fragment>
  );
};

Login.propTypes = {
  // setAlert: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(null, { login })(Login);
