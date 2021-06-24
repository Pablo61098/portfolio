import  {DarkModeActionTypes}  from './darkMode.types';

const DARKMODE_STATE = {
    currentState: true
}

const darkModeReducer = (state = DARKMODE_STATE, action) => {
    switch(action.type){
        case DarkModeActionTypes.SET_DARKMODE:
            return {
                ...state,
                currentState: !state.currentState
            }
        default:
            return state
    }
}

export default darkModeReducer;

