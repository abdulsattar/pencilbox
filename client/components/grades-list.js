import React from 'react';

class GradesList extends React.Component {
    render() {
        const gradeNodes = this.props.grades.map((g) => {
            return <li className={`grade theme-orange-bg-hover link grade-${g.id}`}>
                <a onClick={() => this.props.onSelectGrade(g)}>{g.id}</a>
            </li>;
        });
        return <div className="landing-page">
            <img src="images/logo.png" alt="logo" className="main-logo logo"/>

            <div className="search-box border clear">
                <div className="search-input left">
                    <div className="input-container">
                        <input type="text" className="search-input" placeholder="Search with subject, chapter"/>
                    </div>
                </div>
                <div className="search-icon link right"><img src="images/search-icon.png" alt="search"/></div>
            </div>

            <div className="grades-container">
                <h2 className="title t-center">Select your grade below</h2>
                <ul className="grades t-center">
                    {gradeNodes}
                </ul>
            </div>
        </div>;
    }
}

export default GradesList;