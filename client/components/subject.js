import React from 'react';

class Subject extends React.Component {
    render() {
        return <div>
            <h1>Hello</h1>
            {this.props.children}
        </div>;
    }
}

export default Subject;