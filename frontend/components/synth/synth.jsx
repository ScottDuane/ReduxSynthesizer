import { TONES, NOTE_NAMES } from '../../util/tones';
import Note from '../../util/note';
import $ from 'jquery';
import React from 'react';

class Synth extends React.Component {
  constructor (props) {
    super(props);
    this.notes = [];
    NOTE_NAMES.forEach(function(note) {
      this.notes.push(new Note(TONES[note]));
    });
  }

  componentDidMount () {
    $(document).on('keydown', this.onKeyDown(e));
    $(document).on('keyup', this.onKeyUp(e));
  }

  playNotes () {
    const playableNotes = this.state.notes;
    this.notes.forEach( function(note) {
      if (playableNotes.includes(note)) {
        note.start();
      }

      note.stop();
    });
  }
  onKeyDown (e) {
    this.props.keyPressed(e.key);
  }

  onKeyUp(e) {
    this.props.keyReleased(e.key);
  }

  render () {
    return (<ul>
      {this.notes.map( function(note) {
        return <li>{note}</li>;
      })};
    </ul>);
  }
}