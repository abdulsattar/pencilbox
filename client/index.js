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
import pencilBoxReducer from './reducers'

require('./styles/main.scss');


const reducer = combineReducers({
    router: routerStateReducer,
    pencilBox: pencilBoxReducer
});

const store = createStore(pencilBoxReducer);
    //reduxReactRouter({ createHistory })(createStore)(reducer);

console.log(store.getState());

React.render(
    <Provider store={store}>
        {/*() => <ReduxRouter>
            <Route path="/" component={App}>
                <Route path="grades/:gradeId" component={Grade}>
                    <Route path="subjects/:subjectId" component={Subject}>
                        <Route path=":chapterId" component={Chapter}/>
                    </Route>
                </Route>
            </Route>
        </ReduxRouter>*/}
        {() => <App />}
    </Provider>,
    document.getElementById('main')
);