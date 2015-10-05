import React from 'react';

class Grade extends React.Component {
    render() {
        return <div>
            <h1>Grade</h1>
            {this.props.children}
        </div>;
    }
}

export default Grade;