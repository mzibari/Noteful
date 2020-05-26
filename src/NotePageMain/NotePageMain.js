import React from 'react'
import Note from '../Note/Note'
import NotefulContext from '../NotefulContext';
import { findNote } from '../notes-helpers'
import NotePageMainBoundary from '../ErrorBoundaries/NotePageMainBoundary';
import PropTypes from 'prop-types';
import './NotePageMain.css'

export default class NotePageMain extends React.Component {
  static contextType = NotefulContext;

  handleDeleteNote = noteId => {
    this.props.history.push(`/`)
  }

  render() {
    const { notes = [] } = this.context
    const { noteId } = this.props.match.params
    const note = findNote(notes, noteId) || { content: '' }

    return (
      <NotePageMainBoundary>
        <section className='NotePageMain'>
          <Note
            id={note.id}
            name={note.name}
            modified={note.modified}
          />
          <div className='NotePageMain__content'>
            {note.content && note.content.split(/\n \r|\n/).map((para, i) =>
              <p key={i}>{para}</p>
            )}
          </div>
        </section>
      </NotePageMainBoundary>
    )
  }
}

NotePageMain.propTypes = {
  notes: PropTypes.object.isRequired
}