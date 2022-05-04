import './feature.css';

export default function Feature({ image, title, content }) {
  return (
    <div className='feature-card' tabIndex='0'>
      <img src={image} alt={title} className='featurecard-img' />
      <p className='feature-card-desc'>{content}</p>
    </div>
  );
}
