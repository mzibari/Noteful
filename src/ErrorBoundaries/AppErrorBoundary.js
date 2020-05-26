import React from 'react';

export default class AppErrorBoundary extends React.Component {
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
            return (<h2>Something wrong has happened while loading the program</h2>)
        }
        return this.props.children;
    }
}