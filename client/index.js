import React       from 'react';
import {Provider} from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import App from './components/app';
import Subject from './components/subject';
import Chapter from './components/chapter';
import Grade from './components/grade';
import GradesList from './components/grades-list';
import { IndexRoute, Route } from 'react-router';
import { ReduxRouter, routerStateReducer, reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
import initialState from './data';

require('./styles/main.scss');

const pencilBox = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const reducer = combineReducers({
    router: routerStateReducer,
    pencilBox: pencilBox
});

const store =
    reduxReactRouter({ createHistory })(createStore)(reducer);

console.log(store.getState());

React.render(
    <Provider store={store}>
        {() => <ReduxRouter>
            <Route path="/" component={App}>
                <Route path="grades/:gradeId" component={Grade}>
                    <Route path="subjects/:subjectId" component={Subject}>
                        <Route path=":chapterId" component={Chapter}/>
                    </Route>
                </Route>
            </Route>
        </ReduxRouter>}
    </Provider>,
    document.getElementById('main')
);