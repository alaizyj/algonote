import './contact.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { validate } from '../../services/services';

export default function Contact() {
  const navigate = useNavigate();
  const [newmessage, setNewMessage] = useState({
    name: '',
    contactEmail: '',
    subject: '',
    message: '',
  });

  const [feedback, setFeedBack] = useState('');
  const [validated, setValidated] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMessage((prevMessage) => {
      return {
        ...prevMessage,
        [name]: value,
      };
    });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(null, false, null, newmessage));
    setValidated(true);
    setFeedBack('');
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && validated) {
      setLoading(true);
      setNewMessage({
        name: '',
        contactEmail: '',
        subject: '',
        message: '',
      });
      setTimeout(() => {
        setLoading(false);
        setFeedBack('Sent!');
      }, 2000);
      setTimeout(() => {
        navigate('/');
      }, 3500);
    }
  }, [formErrors]);

  return (
    <div className='contact-page'>
      <h1 className='contact-page-header'> Contact </h1>{' '}
      <form action='' className='contact-form' onSubmit={handleContactSubmit}>
        <input
          type='text'
          name='name'
          className='contact-row-input'
          value={newmessage.name}
          placeholder='Your name'
          onChange={handleChange}
        ></input>
        <p className='form-error'>{formErrors.name}</p>
        <input
          type='email'
          name='contactEmail'
          className='contact-row-input'
          value={newmessage.contactEmail}
          placeholder='Email'
          onChange={handleChange}
        ></input>
        <p className='form-error'>{formErrors.contactEmail}</p>
        <input
          type='text'
          name='subject'
          className='contact-row-input'
          value={newmessage.subject}
          placeholder='Subject'
          onChange={handleChange}
        ></input>
        <p className='form-error'>{formErrors.subject}</p>
        <textarea
          type='text'
          name='message'
          placeholder='Message'
          className='contact-row-input'
          value={newmessage.message}
          rows='10'
          cols='30'
          onChange={handleChange}
        ></textarea>
        <p className='form-error'>{formErrors.message}</p>
        <button className='contactform-submit-button' type='submit'>
          Send
        </button>
      </form>
      {loading && <div className='spinner'></div>}
      <p className='submit-form-feedback'>{feedback}</p>
    </div>
  );
}
