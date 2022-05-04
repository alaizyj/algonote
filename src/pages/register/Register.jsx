import { useState, useEffect } from 'react';
import './register.css';
import { users } from '../../data/users';
import { fetchRegister, validate } from '../../services/services';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const newUser = { username, email, password };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(newUser, true, null, null));
    setValidated(true);
    setMessage('');
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && validated) {
      setLoading(true);
      fetchRegister(newUser)
        .then((response) => {
          users[newUser.username] = newUser;
          setLoading(false);
          setMessage(response);
          setTimeout(() => {
            navigate('/login');
          }, 1000);
        })
        .catch((error) => {
          setLoading(false);
          setMessage(error.error);
        });
    }
  }, [formErrors]);

  return (
    <div className='register'>
      <h1 className='register-form-title'> Register </h1>{' '}
      <form action='' className='register-form' onSubmit={handleSubmit}>
        <label htmlFor=''> User Name </label>{' '}
        <input
          className='register-input'
          type='text'
          placeholder='Enter your username'
          onChange={(e) => setUserName(e.target.value)}
        />{' '}
        <p className='form-error'>{formErrors.username}</p>
        <label htmlFor=''> Email </label>{' '}
        <input
          className='register-input'
          type='email'
          placeholder='Enter your email'
          onChange={(e) => setEmail(e.target.value)}
        />{' '}
        <p className='form-error'>{formErrors.email}</p>
        <label htmlFor=''> Password </label>{' '}
        <input
          className='register-input'
          type='password'
          placeholder='Enter your password'
          onChange={(e) => setPassword(e.target.value)}
        />{' '}
        <p className='form-error'>{formErrors.password}</p>
        <button className='register-submit-button' type='submit'>
          Create Account{' '}
        </button>{' '}
      </form>{' '}
      {loading && <div className='spinner'></div>}
      {message && <p className='register-error-message'> {message} </p>}{' '}
    </div>
  );
}
