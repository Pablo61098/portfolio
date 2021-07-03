import  {DarkModeActionTypes}  from './darkMode.types';

const DARKMODE_STATE = {
    currentState: true,
    alreadyLoaded: false
}

const darkModeReducer = (state = DARKMODE_STATE, action) => {
    switch(action.type){
        case DarkModeActionTypes.SET_DARKMODE:
            return {
                ...state,
                alreadyLoaded: true,
                currentState: !state.currentState
            }
        case DarkModeActionTypes.SET_ALREADY_LOADED:
            return {
                ...state,
                alreadyLoaded: true
            }
        default:
            return state
    }
}

export default darkModeReducer;

