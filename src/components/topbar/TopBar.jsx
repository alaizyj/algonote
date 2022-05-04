import './topbar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileNav from '../mobilenav/MobileNav';
import { UserContext } from '../../context/Context';
import { useContext } from 'react';

export default function TopBar() {
  const { user, dispatch } = useContext(UserContext);
  const [scroll, setScroll] = useState(false);
  const updateScroll = () => {
    if (window.scrollY >= 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener('scroll', updateScroll);
  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: 'LOG_OUT' });
    window.location.replace('/');
  };

  return (
    <div className={scroll ? 'topbar active' : 'topbar'}>
      <a href='#main-content' className='skip-button'>
        Skip to main content{' '}
      </a>{' '}
      <div className='topbar-wrapper'>
        <div className='topbar-logo'>
          <h1 className='website-title'> AlgoNote </h1>{' '}
        </div>{' '}
        <div className='topbar-hamburger'>
          <MobileNav />
        </div>{' '}
        <div className='topbar-link'>
          {' '}
          <nav className='navbar'>
            <ul className='menu'>
              {' '}
              <li>
                {' '}
                <Link className='menu-button' to='/'>
                  HOME{' '}
                </Link>{' '}
              </li>{' '}
              <li>
                {' '}
                <Link className='menu-button' to='/datastructure'>
                  DATA STRUCTURES{' '}
                </Link>{' '}
              </li>{' '}
              {user && (
                <li>
                  {' '}
                  <Link className='menu-button' to='/addnote'>
                    ADD{' '}
                  </Link>{' '}
                </li>
              )}{' '}
              <li>
                {' '}
                <Link className='menu-button' to='/contact'>
                  CONTACT{' '}
                </Link>{' '}
              </li>{' '}
            </ul>{' '}
          </nav>{' '}
          {!user && (
            <div className='topbar-button'>
              <Link className='login-button' to='/login'>
                Login
              </Link>{' '}
              <Link className='register-button' to='/register'>
                Register
              </Link>{' '}
            </div>
          )}{' '}
          {user && (
            <div className='topbar-button'>
              <p> Hi, {user.username} </p>{' '}
              <button className='logout-button' onClick={handleClick}>
                Logout{' '}
              </button>{' '}
            </div>
          )}{' '}
        </div>{' '}
      </div>{' '}
      <div id='main-content'> </div>{' '}
    </div>
  );
}
