import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import GradesList from './grades-list';
import Grade from './grade';
import Subject from './subject';

@connect(state => state)
class App extends React.Component {
    render() {
        const {dispatch, grades, selectedGrade, selectedSubject, selectedChapter} = this.props;

        let children = null;
        if (selectedSubject) {
            children = <Subject grade={selectedGrade} subject={selectedSubject} selectedChapter={selectedChapter} onSelectChapter={(chapter) => dispatch({type: 'SELECT_CHAPTER', chapter})}/>;
        } else if (selectedGrade) {
            children = <Grade grade={selectedGrade}
                              onSelectSubject={(subject) => dispatch({type: 'SELECT_SUBJECT', subject})}/>;
        } else {
            children = <GradesList grades={grades} onSelectGrade={(grade) => dispatch({type: 'SELECT_GRADE', grade})}/>
        }

        return <div>
            {children}
        </div>;
    }
}

export default App;