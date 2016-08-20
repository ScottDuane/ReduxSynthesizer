import { NotesConstants } from '../util/note.js';
import union from 'lodash/union';

const notes = ( state = [], action ) => {
  const validKeys = ['a', 's', 'd', 'f', 'g'];
  const keyMap = { 'a': 'C5', 's': 'D5', 'd': 'E5', 'f': 'F5', 'g': 'G5' };
  const note = keyMap[action.key];

  switch(action.type) {
    case NotesConstants.KEY_PRESSED:
      if (!state.includes(note) && validKeys.includes(action.key)) {
        // create a new state
        return state.concat(note);
      } else {
        return state;
      }
    case NotesConstants.KEY_RELEASED:
      if(state.includes(note) && validKeys.includes(action.key)) {
        // create a new state
        const idx = state.indexOf(note);
        return [ ...state.slice(0, idx), ...state.slice(idx + 1)];
      } else {
        return state;
      }
  }
};

export default notes;