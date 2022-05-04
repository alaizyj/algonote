import './about.css';
import Feature from '../../components/feature/Feature';
import dataStrutureImg from '../../img/datastructure.png';
import makeNotesImg from '../../img/makenotes.png';
import sharelearningImg from '../../img/sharelearning.png';

export default function About() {
  return (
    <div className='about-page'>
      <h1 className='about-page-header'>What is AlgoNote?</h1>
      <h2 className='about-page-subheader'>
        It has three unique features to promote learning algorithm problems.
      </h2>
      <div className='feature-cards'>
        <Feature
          image={makeNotesImg}
          title={'data structures'}
          content={
            'Taking notes is a good habit. AlgoNote provides a platform for users to take notes about algothrim problems and organize them based on three difficulty tags.'
          }
        />
        <Feature
          image={sharelearningImg}
          title={'data structures'}
          content={
            "It allows users to view others' notes about algorithm problems to promote learning. Future functions will allow users to share or comment on others' notes."
          }
        />
        <Feature
          image={dataStrutureImg}
          title={'data structures'}
          content={
            'It introduces eight common data structures in terms of their characteristics and usage. Pictures of each data structure is given for better illustration.'
          }
        />
      </div>
    </div>
  );
}
