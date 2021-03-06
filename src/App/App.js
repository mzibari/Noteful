import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NoteListNav from '../NoteListNav/NoteListNav';
import NotePageNav from '../NotePageNav/NotePageNav';
import NoteListMain from '../NoteListMain/NoteListMain';
import NotePageMain from '../NotePageMain/NotePageMain';
import NotefulContext from '../NotefulContext';
import { getOptions, apiUrl } from '../notes-helpers'
import AddFolder from '../AddFolder/AddFolder';
import AddNote from '../AddNote/AddNote';
import AppErrorBoundary from '../ErrorBoundaries/AppErrorBoundary'
import './App.css';

class App extends Component {
    state = {
        notes: [],
        folders: []
    };

    componentDidMount() {
        fetch(apiUrl.notes, getOptions)
            .then(resp => resp.json())
            .then(data =>
                this.setState({
                    notes: data
                })
            );

        fetch(apiUrl.folders, getOptions)
            .then(resp => resp.json())
            .then(data =>
                this.setState({
                    folders: data
                })
            );
    }

    handleDeleteNote = noteId => {
        this.setState({
            notes: this.state.notes.filter(note => note.id !== noteId)
        });
    };

    handleAddFolder = () => {
        fetch(apiUrl.folders, getOptions)
            .then(resp => resp.json())
            .then(data =>
                this.setState({
                    folders: data
                })
            );
    }

    handleAddNote = () => {
        fetch(apiUrl.notes, getOptions)
            .then(resp => resp.json())
            .then(data =>
                this.setState({
                    notes: data
                })
            );
    }

    renderNavRoutes() {
        return (
            <>
                {['/', '/folder/:folderId'].map(path => (
                    <Route
                        exact
                        key={path}
                        path={path}
                        component={NoteListNav}
                    />
                ))}
                <Route path="/note/:noteId" component={NotePageNav} />

                <Route path="/add-note" component={NotePageNav} />
            </>
        );
    }

    renderMainRoutes() {
        return (
            <>
                {['/', '/folder/:folderId'].map(path => (
                    <Route
                        exact
                        key={path}
                        path={path}
                        component={NoteListMain}
                    />
                ))}
                <Route path="/note/:noteId" component={NotePageMain} />
                <Route path="/add-folder" component={AddFolder} />
                <Route path="/add-note" component={AddNote} />
            </>
        );
    }

    render() {
        const contextStore = {
            notes: this.state.notes,
            folders: this.state.folders,
            deleteNote: this.handleDeleteNote,
            addFolder: this.handleAddFolder,
            addNote: this.handleAddNote
        }
        return (
            <AppErrorBoundary>
                <NotefulContext.Provider value={contextStore}>
                    <div className="App">
                        <nav className="App__nav">{this.renderNavRoutes()}</nav>
                        <header className="App__header">
                            <h1>
                                <Link to="/">Noteful</Link>{' '}
                                <FontAwesomeIcon icon="check-double" />
                            </h1>
                        </header>
                        <main className="App__main">{this.renderMainRoutes()}</main>
                    </div>
                </NotefulContext.Provider>
            </AppErrorBoundary>
        );
    }
}

export default App;
