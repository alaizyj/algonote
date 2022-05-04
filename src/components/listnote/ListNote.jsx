import './listnode.css';
import { useContext, useState } from 'react';
import { UserContext } from '../../context/Context';

export default function ListNote({ note, id }) {
  const { deleteNote } = useContext(UserContext);
  const [open, setOpen] = useState(false);

  return (
    <div className='list-note'>
      <div className='list-note-box'>
        <div className='list-note-info'>
          <div className='list-note-title'>{note.title}</div>
          <p className={`list-note-${note.tag}`}>{note.tag}</p>
        </div>
        <div className='list-note-buttons'>
          <button
            onClick={() => {
              deleteNote(id);
            }}
            className='list-note-button'
          >
            Delete
          </button>
          <button
            onClick={() => {
              setOpen(!open);
            }}
            className='list-note-togglebutton'
          >
            {open ? 'Close' : 'View'}
          </button>
        </div>
      </div>
      <div className={open ? 'list-note-content' : 'hidden'}>
        {note.content}
      </div>
    </div>
  );
}
