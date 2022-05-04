import './addnote.css';
import { useContext, useEffect, useState } from 'react';
import { validate } from '../../services/services';
import Notes from '../../components/notes/Notes';
import { UserContext } from '../../context/Context';

export default function AddNote() {
  const [validated, setValidated] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const { allNotes } = useContext(UserContext);
  const { addNote } = useContext(UserContext);
  const [newNote, setNewNote] = useState({
    title: '',
    tag: '',
    content: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewNote((prevNotes) => {
      return {
        ...prevNotes,
        [name]: value,
      };
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    setFormErrors(validate(null, false, newNote, null));
    setValidated(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && validated) {
      addNote(newNote);
      setValidated(false);
      setNewNote({
        title: '',
        tag: '',
        content: '',
      });
    }
  }, [formErrors]);

  return (
    <div className='addnote-page'>
      <h1 className='add-form-title'> Add a new note </h1>{' '}
      <form action='' className='add-form' onSubmit={handleAdd}>
        <input
          id='note-title'
          type='text'
          name='title'
          className='normal-input'
          autoFocus={true}
          value={newNote.title}
          placeholder='Note title (maximum length is 30)'
          onChange={handleChange}
        />{' '}
        <p className='form-error'>{formErrors.title}</p>
        <div className='form-row-input'>
          <div className='form-radio-input'>
            <input
              type='radio'
              name='tag'
              value='Easy'
              id='easy-tag'
              checked={newNote.tag === 'Easy'}
              onChange={handleChange}
            />
            <label htmlFor='easy-tag' className='addnote-form-label'>
              Easy
            </label>
          </div>
          <div className='form-radio-input'>
            <input
              type='radio'
              name='tag'
              value='Medium'
              id='medium-tag'
              checked={newNote.tag === 'Medium'}
              onChange={handleChange}
            />
            <label htmlFor='medium-tag' className='addnote-form-label'>
              Medium
            </label>
          </div>
          <div className='form-radio-input'>
            <input
              type='radio'
              name='tag'
              value='Hard'
              id='hard-tag'
              checked={newNote.tag === 'Hard'}
              onChange={handleChange}
            />
            <label htmlFor='hard-tag' className='addnote-form-label'>
              Hard
            </label>
          </div>
        </div>
        <p className='form-error'>{formErrors.tag}</p>
        <textarea
          className='normal-input'
          name='content'
          id=''
          cols='30'
          rows='4'
          placeholder='Write down the content (maximum length is 100)'
          type='text'
          value={newNote.content}
          onChange={handleChange}
        ></textarea>{' '}
        <p className='form-error'>{formErrors.content}</p>
        <button className='addnote-submit-button'>Add</button>
      </form>
      <Notes notes={allNotes} />
    </div>
  );
}
