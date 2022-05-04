import './login.css';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/Context';
import { fetchLogin, validate } from '../../services/services';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const loginUser = {
    username,
    password,
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(loginUser, false, null, null));
    setValidated(true);
    setMessage('');
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && validated) {
      setLoading(true);
      fetchLogin(loginUser)
        .then((response) => {
          console.log(response);
          dispatch({ type: 'LOGIN_SUCCESS', payload: response });
          setLoading(false);
          setMessage('Welcome, ' + username + '!');
          setTimeout(() => {
            navigate('/');
          }, 2000);
        })
        .catch((error) => {
          setLoading(false);
          setMessage(error.error);
        });
    }
  }, [formErrors]);
  return (
    <div className='login-page'>
      <div className='login'>
        <h1 className='login-form-title'> Login </h1>{' '}
        <form action='' className='login-form' onSubmit={handleSubmit}>
          <label className='login-form-label'> Username </label>{' '}
          <input
            className='login-input'
            type='text'
            placeholder='Enter your username'
            onChange={(e) => setUsername(e.target.value)}
          />{' '}
          <p className='form-error'>{formErrors.username}</p>
          <label className='login-form-label'> Password </label>{' '}
          <input
            className='login-input'
            type='password'
            placeholder='Enter your password'
            onChange={(e) => setPassword(e.target.value)}
          />{' '}
          <button className='form-login-button' type='submit'>
            Login{' '}
          </button>{' '}
        </form>{' '}
        <p className='form-addon-info'> Don 't have an account? </p>{' '}
        <Link to='/register'>
          <button className='form-register-button'> Register </button>{' '}
        </Link>{' '}
        {loading && <div className='spinner'></div>}
        {message && <p className='message-area'> {message} </p>}{' '}
      </div>
    </div>
  );
}
