import { en, SET_LANGUAGE, SET_MESSAGES } from './../../constants';
import getBrowserLanguage from './../../helpers/getBrowserLanguage';

const initialBaseLanguage = () => window.reactReduxLocalization && window.reactReduxLocalization.baseLanguage ? window.reactReduxLocalization.baseLanguage : en;
const initialCurrentLanguage = () => {
    const browserLanguage = getBrowserLanguage();
    if(window.reactReduxLocalization && window.reactReduxLocalization.currentLanguage) {
        return window.reactReduxLocalization.baseLanguage;
    } else if(browserLanguage) {
        return browserLanguage;
    }
    return en;
}
const initialMessages = () => window.reactReduxLocalization && window.reactReduxLocalization.messages ? window.reactReduxLocalization.messages : {};

const initialState = {
    baseLanguage: initialBaseLanguage(),
    currentLanguage: initialCurrentLanguage(),
    messages: initialMessages()
}

const LocalizationReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LANGUAGE:
            return {
                ...state,
                currentLanguage: action.currentLanguage
            }
        case SET_MESSAGES:
            return {
                ...state,
                messages: action.messages
            }
        default:
            return state;
    }
}

export default LocalizationReducer;