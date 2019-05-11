import { en_EN, SET_LANGUAGE, SET_MESSAGES } from './../../constants/languages';

export const getBaseLanguageKey = () => {
    if(window && window.navigator && window.navigator.language) {
        return window.navigator.language;
    } else if(window && window.navigator && window.navigator.userLanguage) {
        return window.navigator.userLanguage;
    }
    return en_EN;
}

const initialMessages = {
    "en-EN": {
        a: {
            b: {
                c: 'Hello, I\' am the c',
                d: 'Hello, I\' am the d',
                k: 'Hello, I\' am the d with vars {0}',
                j: 'Test with named variables {name} {surname}',
                variable: 'piggod'
            }
        },
        counterable: {
            name: {
                singular: "{counter} thing",
                plural: "{counter} things",
                empty: "{counter} things"
            }
        }
    },
    "it-IT": {
        a: {
            b: {
                c: 'Ciao sono la c',
                k: 'Ciao sono la k con variabili {0}',
                j: 'Test con variabili esplicite {name} {surname}',
                variable: 'porco dio'
            }
        },
        counterable: {
            name: {
                singular: "{counter} cosa",
                plural: "{counter} cose",
                empty: "{counter} cose"
            }
        }
    }
}

const initialState = {
    baseLanguage: en_EN,
    currentLanguage: getBaseLanguageKey(),
    messages: initialMessages
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