import { combineReducers } from 'redux';

import darkModeReducer from './darkmode/darkMode.reducer';

const rootReducer = combineReducers({
    darkMode: darkModeReducer
})

export default rootReducer;