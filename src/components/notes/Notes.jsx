import './notes.css';
import { useState } from 'react';
import ListNote from '../listnote/ListNote';
import GridNote from '../gridnote/GridNote';
import Pagination from '../pagination/Pagination';

export default function Notes({ notes }) {
  const [view, setView] = useState('grid');

  const [currentPage, setCurrentPage] = useState(1);
  const [notesPerPage, setNotesPerPage] = useState(8);

  const indexOfLastNote = currentPage * notesPerPage;
  const indexOfFirstNote = indexOfLastNote - notesPerPage;
  const currentNotes = notes.slice(indexOfFirstNote, indexOfLastNote);
  const totalNotes = notes.length;
  const totalPages = Math.ceil(totalNotes / notesPerPage);

  return (
    <div className='notes-view'>
      <div className='notes-view-header'>
        <p className='notes-view-title'>All Notes</p>
        <div className='notes-view-buttons'>
          <button
            className={
              view === 'grid'
                ? 'notes-view-button chosen-view'
                : 'notes-view-button'
            }
            onClick={() => setView('grid')}
          >
            Grid
          </button>
          <button
            className={
              view === 'list'
                ? 'notes-view-button chosen-view'
                : 'notes-view-button'
            }
            onClick={() => setView('list')}
          >
            List
          </button>
        </div>
      </div>
      {view == 'list' ? (
        <div className='list-notes'>
          {currentNotes.map((note, idx) => (
            <ListNote key={idx} id={idx} note={note} />
          ))}
        </div>
      ) : (
        <div className='grid-notes'>
          {currentNotes.map((note, idx) => (
            <GridNote key={idx} id={idx} note={note} />
          ))}
        </div>
      )}
      {currentNotes.length > 0 && (
        <Pagination
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          currentNotes={currentNotes}
          totalNotes={totalNotes}
        />
      )}
    </div>
  );
}
