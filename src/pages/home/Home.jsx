import './home.css';
import { Link } from 'react-router-dom';
import heroImg from '../../img/hero.png';
import herodataImg from '../../img/hero-data.png';

export default function Home() {
  return (
    <div className='home-page'>
      <div className='hero'>
        <div className='hero-text'>
          <div className='text-body'>
            <p className='hero-first-title'>
              {' '}
              Algorithm problems are difficult{' '}
            </p>{' '}
            <p className='hero-title'> Share your ideas ? </p>{' '}
            <Link to='/register'>
              <button className='hero-button'> Register </button>{' '}
            </Link>{' '}
          </div>{' '}
        </div>{' '}
        <div className='hero-img'>
          <img src={heroImg} alt='hero image' className='hero-image' />
        </div>{' '}
      </div>{' '}
      <div className='ds-content'>
        <div className='ds-text'>
          <div className='text-body'>
            <p className='hero-title'> Eight Common Data Structures </p>{' '}
            <Link to='/datastructure'>
              <button className='hero-button'> View All </button>{' '}
            </Link>{' '}
          </div>{' '}
        </div>{' '}
        <div className='ds-img'>
          <img
            src={herodataImg}
            alt='data structure image'
            className='hero-image'
          />
        </div>{' '}
      </div>{' '}
      <div className='algorithms'>
        <p className='cat-title'> Algorithms & Types </p>{' '}
        <ul className='cat-ul-algo'>
          <li className='single-cat-algo'> Binary Search </li>{' '}
          <li className='single-cat-algo'> Depth First Search(DFS) </li>{' '}
          <li className='single-cat-algo'> Breadth First Search(DFS) </li>{' '}
          <li className='single-cat-algo'> Sort </li>{' '}
          <li className='single-cat-algo'> Kruskal </li>{' '}
          <li className='single-cat-algo'> Dijkstra </li>{' '}
          <li className='single-cat-algo'> Knuth - Morris - Pratt </li>{' '}
          <li className='single-cat-algo'> Euclid </li>{' '}
          <li className='single-cat-algo'> Bellman Ford </li>{' '}
          <li className='single-cat-algo'> Kadane </li>{' '}
          <li className='single-cat-algo'> Union Find </li>{' '}
          <li className='single-cat-algo'> Topological Sort </li>{' '}
          <li className='single-cat-algo'> Two Pointer </li>{' '}
          <li className='single-cat-algo'> Backtracking </li>{' '}
          <li className='single-cat-algo'> Dynamic Programming </li>{' '}
          <li className='single-cat-algo'> Divide & Conquer </li>{' '}
          <li className='single-cat-algo'> Greedy </li>{' '}
          <li className='single-cat-algo'> Brute force </li>{' '}
        </ul>{' '}
      </div>{' '}
      <div className='contact-section'>
        <h1 className='footer-contact-header'>
          {' '}
          Wanna share your ideas? Feel free to contact us!{' '}
        </h1>{' '}
        <div className='contact-button'>
          <Link to='/contact'>
            <button className='footer-contact-button '> Contact </button>{' '}
          </Link>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  );
}
