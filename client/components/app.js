import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import GradesList from './grades-list';

@connect(state => state)
class App extends React.Component {
    render() {
        return <div>
            {this.props.children || <GradesList grades={this.props.pencilBox.grades} />}
        </div>;
    }
}

export default App;