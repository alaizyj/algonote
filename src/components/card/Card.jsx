import './card.css';

export default function Card({ title, imgAddress, content }) {
  return (
    <div className='card' tabIndex='0'>
      <div className='img-container'>
        <img src={imgAddress} alt={title} className='card-img' />
      </div>{' '}
      <p className='card-title'> {title} </p>{' '}
      <p className='card-body'> {content} </p>{' '}
    </div>
  );
}
