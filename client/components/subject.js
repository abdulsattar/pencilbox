import React from 'react';

class Subject extends React.Component {
    render() {
        const {subject, grade, selectedChapter, onSelectChapter} = this.props;
        const applications = selectedChapter ? selectedChapter.apps.filter((app) => app.type === "apps") : [];
        const videos = selectedChapter ? selectedChapter.apps.filter((app) => app.type === "videos") : [];
        const quizzes = selectedChapter ? selectedChapter.apps.filter((app) => app.type === "quiz") : [];
        const children = selectedChapter ? [<li className="row app-panel">
            <div className="row-header border">Applications</div>
            <ul className="content-items border t-center">
                {
                    applications.map(app => {
                        return <li className="item border">
                            <a href={app.exec}
                               className="a-container wrapper theme-orange-bg-hover">
                                <div className="img-container">
                                    <img src={`images/subjects/${app.subject}.png`}
                                         alt="biology"
                                         className="subject-img"/>
                                </div>
                                <p className="subject-name t-center border-top">{app.name}</p>
                            </a>
                        </li>
                    })
                }
            </ul>
        </li>,
            <li className="row video-panel">
                <div className="row-header border">Videos</div>
                <ul className="content-items border t-center">
                    {
                        videos.map(app => {
                            return <li className="item border">
                                <a href={app.exec}
                                   className="a-container wrapper theme-orange-bg-hover">
                                    <div className="img-container">
                                        <img src={`images/subjects/${app.subject}.png`}
                                             alt="biology"
                                             className="subject-img"/>
                                    </div>

                                    <p className="subject-name t-center border-top">{app.name}</p>
                                </a>
                            </li>
                        })
                    }

                </ul>
            </li>,
            <li className="row quiz-panel">
                <div className="row-header border">Quiz</div>
                <ul className="content-items border t-center">
                    {quizzes.map(app => {
                        return <li className="item border">
                            <a href={app.exec}
                               className="a-container wrapper theme-orange-bg-hover">
                                <div className="img-container">
                                    <img src={`images/subjects/${app.subject}.png`}
                                         alt="biology" className="subject-img"/>
                                </div>

                                <p className="subject-name t-center border-top">{app.name}</p>
                            </a>
                        </li>;
                    })}

                </ul>
            </li>] : <li>Please select a chapter</li>;
        return <div className="chapter-page">
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
                    <header className="subject-header border clear">
                        <div className="selected-grade left m-no-left m-border-bottom">
                            <div className="wrapper">
                                <div className="grade-box t-center">
                                    <div className="grade-title">Grade</div>
                                    <a href="#/grades"
                                       className="grade-text theme-orange-bg border a-container">{grade.id}</a>
                                </div>
                            </div>
                        </div>
                        <div className="subjects-head flexible left  m-no-left">
                            <div className="subjects-wrapper border-left">
                                <ul className="subjects t-center">
                                    <li ng-repeat="subject in subjects"
                                        ng-className="isCurrentSubject(subject.id) ? 'selected theme-orange-bg t-center' : 't-center'">
                                        <a href="#/grades/{current_grade}/subject/{subject.id}/" className="a-container">
                                            <div className="img-container circle">
                                                <img src="images/subjects/{subject.id}.png" alt={subject.id}
                                                     className="subject-img circle"/>
                                            </div>
                                            <div className="subject-name">{subject.name}</div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </header>
                    <section className="chapter-section border clear" chapter-section>
                        <div className="chapter-list-wrapper left m-no-left">
                            <div className="wrapper">
                                <ul className="chapter-list t-left">
                                    {subject.chapters.map(chapter => {
                                        return <li
                                            ng-className="isCurrentChapter(chapter.id) ? 'selected theme-orange-bg t-left' : 't-left'">
                                            <a onClick={() => onSelectChapter(chapter)} className="a-container">
                                                <div className="img-container circle">
                                                    <img src={`images/topics/grey/g-${chapter.id}.png`} alt={chapter.id}
                                                         className="chapter-img"/>
                                                </div>
                                                <div className="chapter-name">{chapter.name}</div>
                                            </a>
                                        </li>
                                    })}

                                </ul>
                            </div>
                        </div>
                        <div className="content-list-wrapper left m-no-left">
                            <div className="wrapper border-left">
                                <ul className="content-list">
                                    {children}
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>

            </section>
        </div>
            ;
    }
}

export default Subject;