import { LanguageActionTypes } from "./language.types";

const LANGUAGE_STATE = {
    languageState: 'en'
}

const languageReducer = (state = LANGUAGE_STATE, action) => {
    switch(action.type){
        case LanguageActionTypes.SET_SPANISH:
            return {
                languageState: 'es'
            }
        case LanguageActionTypes.SET_ENGLISH:
            return {
                languageState: 'en'
            }
        default: 
            return state
    }
}

export default languageReducer;
