import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import darkModeReducer from './darkmode/darkMode.reducer';
import languageReducer from './language/language.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['darkMode', 'language']
}

const rootReducer = combineReducers({
    darkMode: darkModeReducer,
    language: languageReducer
})

export default persistReducer(persistConfig, rootReducer);