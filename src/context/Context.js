import { createContext, useEffect, useReducer, useState } from 'react';
import Reducer from './Reducer';
import { notes } from '../data/notes';

const INITIAL_STATE = {
  user: null,
};
export const UserContext = createContext(INITIAL_STATE);

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
  const [allNotes, setAllNotes] = useState(notes);
  const addNote = (newNote) => {
    setAllNotes((prevAllNotes) => {
      return [...prevAllNotes, newNote];
    });
  };

  const deleteNote = (id) => {
    setAllNotes((prevNotes) => {
      return prevNotes.filter((note, idx) => {
        return idx !== id;
      });
    });
  };

  useEffect(() => {}, [state.user]);
  return (
    <UserContext.Provider
      value={{ user: state.user, allNotes, addNote, deleteNote, dispatch }}
    >
      {' '}
      {children}{' '}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
