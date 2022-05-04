import './mobilenav.css';
import { Link, useNavigate } from 'react-router-dom';

import { useState, useContext } from 'react';
import { UserContext } from '../../context/Context';

export default function MobileNav() {
  const { user, dispatch } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const toggleOpen = () => {
    setOpen(!open);
  };

  window.addEventListener('scroll', function () {
    if (open) {
      setOpen(false);
    }
  });

  document.addEventListener('click', (e) => {
    if (!document.getElementById('hamburgermenu').contains(e.target)) {
      setOpen(false);
    }
  });

  const handleClick = (e) => {
    e.preventDefault();
    setOpen(false);
    dispatch({ type: 'LOG_OUT' });
    navigate('/');
  };

  return (
    <div className='hamburger-menu' id='hamburgermenu'>
      {' '}
      {/* <input id="menu-toggle" type="checkbox" /> */}{' '}
      <button
        className={open ? 'menu-btn rotate' : 'menu-btn'}
        // for="menu-toggle"
        tabIndex='0'
        onClick={toggleOpen}
      >
        <span> </span>{' '}
      </button>{' '}
      <div className={open ? 'nav-content' : 'inactive'}>
        {' '}
        {user && (
          <div className='user-info'>
            <p> Hi, {user.username} </p>{' '}
            <button className='mobile-logout-button' onClick={handleClick}>
              Logout{' '}
            </button>{' '}
          </div>
        )}{' '}
        <ul className='menu-ul'>
          <li className='menu-li'>
            {' '}
            <Link className='menu-button' to='/' onClick={toggleOpen}>
              HOME{' '}
            </Link>{' '}
          </li>{' '}
          <li className='menu-li'>
            {' '}
            <Link
              className='menu-button'
              to='/datastructure'
              onClick={toggleOpen}
            >
              DATA STRUCTURE{' '}
            </Link>{' '}
          </li>{' '}
          {user && (
            <li className='menu-li'>
              {' '}
              <Link className='menu-button' to='/addnote' onClick={toggleOpen}>
                ADD{' '}
              </Link>{' '}
            </li>
          )}{' '}
          <li className='menu-li'>
            {' '}
            <Link className='menu-button' to='/contact' onClick={toggleOpen}>
              CONTACT{' '}
            </Link>{' '}
          </li>{' '}
        </ul>{' '}
        {!user && (
          <div className='mobile-button'>
            <Link
              className='mobile-login-button'
              to='/login'
              onClick={toggleOpen}
            >
              Login
              {/* <button className='mobile-login-button'> Login </button>{' '} */}
            </Link>{' '}
            <Link
              className='mobile-register-button'
              to='/register'
              onClick={toggleOpen}
            >
              Register
              {/* <button className='mobile-register-button'> Register </button>{' '} */}
            </Link>{' '}
          </div>
        )}{' '}
      </div>{' '}
    </div>
  );
}
