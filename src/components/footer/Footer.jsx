import './footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className='footer-button-div'>
        <a
          href='https://www.linkedin.com/in/yajianzhang/'
          className='footer-button'
        >
          LinkedIn
        </a>
        <a href='https://github.com/alaizyj' className='footer-button'>
          GitHub
        </a>
      </div>
      <div className='footer-info-div'>
        <Link to='/about' className='footer-link'>
          About AlgoNote
        </Link>

        <Link to='/privacy' className='footer-link'>
          Privacy Policy
        </Link>
      </div>
      <div className='footer-copyright-div'>
        <p className='footer-copyright'>Copyright @ Yajian Zhang 2022</p>
      </div>
    </footer>
  );
}
