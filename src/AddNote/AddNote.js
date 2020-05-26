import React from 'react';
import { postOptionsNote, apiUrl } from '../notes-helpers'
import './AddNote.css';
import NotefulContext from '../NotefulContext'


export default class AddNote extends React.Component {
    static contextType = NotefulContext;

    handleEvent(e) {
        e.preventDefault();
        const noteName = document.getElementById('AddNote').value;
        const folderName = document.getElementById('AddFolderName').value;
        const newFolder = this.context.folders.find(folder =>
            folder.name === folderName
        );
        const content = document.getElementById('AddContent').value;
        if (newFolder) {
            fetch(apiUrl.notes, postOptionsNote(noteName, newFolder.id, content))
                .then(response => response.json())
                .then(data => console.log(data));
            this.context.addNote(noteName);
            this.props.history.goBack();
        }
        else {
            document.getElementById("error").innerHTML= "Folder does not exist";
        }
    }
    render() {
        return (
            <div>
                <form className="AddNote__form" onSubmit={e => this.handleEvent(e)}>
                    <label htmlFor="AddNote" className="AddNote__label">Enter Note name</label>
                    <input className="AddNote__name" id="AddNote"></input>

                    <label htmlFor="AddFolderName" className="AddNote__label">Enter folder name </label>
                    <input className="AddNote__folder" id="AddFolderName"></input>

                    <label htmlFor="AddContent" className="AddNote__label">Enter content</label>
                    <input className="AddNote__content" id="AddContent"></input>
                    <button
                        className="Note__add"
                        type="submit"
                    >
                        Add Note
                    </button>
                    <span className="error" id="error"></span>
                </form>
            </div>
        )

    }
}


