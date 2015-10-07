import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import GradesList from './grades-list';
import Grade from './grade';
import Subject from './subject';
import Chapter from './chapter';

@connect(state => state)
class App extends React.Component {
    render() {
        const {dispatch, grades, selectedGrade, selectedSubject, selectedChapter} = this.props;

        let children = null;
        if (selectedGrade) {
            children = <Grade grade={selectedGrade}/>;
        } else if (selectedSubject) {
            children = <Subject subject={selectedSubject}/>;
        } else if (selectedChapter) {
            children = <Chapter chapter={selectedChapter}/>;
        } else {
            children = <GradesList grades={grades} onSelectGrade={(grade) => dispatch({type: 'SELECT_GRADE', grade})}/>
        }

        return <div>
            {children}
        </div>;
    }
}

export default App;