import { SET_LANGUAGE, SET_MESSAGES } from './../../constants';

export const setLanguage = currentLanguage => ({
    type: SET_LANGUAGE,
    currentLanguage
})

export const setMessages = messages => ({
    type: SET_MESSAGES,
    messages
})