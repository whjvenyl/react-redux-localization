import { SET_LANGUAGE, SET_MESSAGES } from './../../constants/languages';

export const setLanguage = (currentLanguage) => {
    return {
        type: SET_LANGUAGE,
        currentLanguage
    }
}

export const setMessages = (messages) => {
    return {
        type: SET_MESSAGES,
        messages
    }
}