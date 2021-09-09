import { LanguageActionTypes } from "./language.types";

const LANGUAGE_STATE = {
    languageState: 'en',
    hasChanged: false
}

const languageReducer = (state = LANGUAGE_STATE, action) => {
    switch(action.type){
        case LanguageActionTypes.SET_SPANISH:
            return {
                languageState: 'es',
                hasChanged: true
            }
        case LanguageActionTypes.SET_ENGLISH:
            return {
                languageState: 'en',
                hasChanged: true
            }
        default: 
            return state
    }
}

export default languageReducer;
