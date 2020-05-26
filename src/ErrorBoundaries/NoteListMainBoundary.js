import React from 'react';

export default class NoteListMainBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (<h2>Something went wrong while retrieving notes</h2>)
        }
        return this.props.children;
    }
}