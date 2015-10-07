import initialState from './data';

initialState.selectedGrade = null;
initialState.selectedSubject = null;
initialState.selectedChapter = null;

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SELECT_GRADE':
            return Object.assign({}, state, {selectedGrade: action.grade});
        case 'SELECT_SUBJECT':
            return Object.assign({}, state, {selectedSubject: action.subject});
        default:
            return state;
    }
};