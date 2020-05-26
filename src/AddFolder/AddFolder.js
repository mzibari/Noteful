import React from 'react';
import { postOptionsFolder, apiUrl } from '../notes-helpers'
import './AddFolder.css';
import NotefulContext from '../NotefulContext'


export default class AddFolder extends React.Component {
    static contextType = NotefulContext;

    handleEvent(e){
        e.preventDefault();
        const folderName = document.getElementById('AddFolder').value;
        fetch(apiUrl.folders, postOptionsFolder(folderName));
        this.context.addFolder(folderName);
    }

    render() {
        return (
            <div>
                <form className="AddFolder__form" onSubmit={e => this.handleEvent(e)}>
                    <label htmlFor="AddFolder" className="AddFolder__label">Enter folder name</label>
                    <input className="AddFolder__name" id="AddFolder"></input>
                    <button 
                    className="Folder__add" 
                    type="submit" 
                    onClick={() => this.props.history.goBack()}>
                        Add Folder
                    </button>
                </form>
            </div>
        )

    }
}


