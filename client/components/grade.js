import React from 'react';

class Grade extends React.Component {
    render() {
        return <div className="subject-page">
                <header className="main-header resize-mobile clear">
                    <img src="images/logo.png" alt="logo" className="header-logo left"/>
                    <div className="other-apps other-apps-bg right">
                        <a href="#/otherApps" className="a-container">
                            <div className="img-container">
                                <img src="images/otherapps.png" alt="other apps icon"/>
                            </div>
                            <span>Other Apps</span>
                        </a>
                    </div>
                </header>
                <section className="main-section">

                    <div className="search-bar resize-mobile">
                        <div className="search-box border clear">
                            <div className="search-input left">
                                <div className="input-container">
                                    <input type="text" className="search-input" placeholder="Search with subject, chapter"/>
                                </div>
                            </div>
                            <div className="search-icon link right"><img src="images/search-icon.png" alt="search"/></div>
                        </div>
                    </div>

                    <div className="subject-container">
                        <header className="subject-header border">
                            <div className="grade-box t-center">
                                <div className="grade-text theme-orange-bg">You selected grade {this.props.grade.id}</div>
                            </div>
                        </header>
                        <section className="subject-section">
                            <div className="subjects-wrapper border-left">
                                <h3 className="title t-center">Select your subject below</h3>
                                <ul className="subjects subject-list t-center">
                                    {this.props.grade.subjects.map(subject => {
                                        return <li data-subject={subject.name}>
                                            <a onClick={() => this.props.onSelectSubject(subject)} className="a-container">
                                                <div className="img-container">
                                                    <img src={`images/subjects/${subject.name}.png`} alt="{subject.name}" className="subject-img"/>
                                                </div>
                                                <div className="subject-name">{subject.name}</div>
                                            </a>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </section>
                    </div>

                </section>
            </div>;
    }
}

export default Grade;