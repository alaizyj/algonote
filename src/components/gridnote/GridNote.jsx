import './gridnote.css';
import { useContext } from 'react';
import { UserContext } from '../../context/Context';
export default function GridNote({ note, id }) {
  const { deleteNote } = useContext(UserContext);

  return (
    <div className='grid-note'>
      <p className='grid-note-title'>{note.title}</p>
      <p className={`grid-note-${note.tag}`}>{note.tag}</p>
      <div className='grid-note-content'>{note.content}</div>
      <button
        className='grid-note-button'
        onClick={() => {
          deleteNote(id);
        }}
      >
        Delete
      </button>
    </div>
  );
}
