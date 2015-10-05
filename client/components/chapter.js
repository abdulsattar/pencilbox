import React from 'react';

class Chapter extends React.Component {
    render() {
        return <div>
            <h1>Chapter</h1>
            {this.props.children}
        </div>;
    }
}

export default Chapter;