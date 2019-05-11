import { en, SET_LANGUAGE, SET_MESSAGES } from './../../constants/languages';
import getBrowserLanguage from './../../helpers/getBrowserLanguage';

const initialBaseLanguage = () => {
    if(window && window.reactReduxLocalization && window.reactReduxLocalization.baseLanguage) {
        return window.reactReduxLocalization.baseLanguage;
    }
    return en;
}

const initialCurrentLanguage = () => {
    const browserLanguage = getBrowserLanguage();
    if(window && window.reactReduxLocalization && window.reactReduxLocalization.currentLanguage) {
        return window.reactReduxLocalization.baseLanguage;
    } else if(browserLanguage) {
        return browserLanguage;
    }
    return en;
}

const initialMessages = () => {
    if(window && window.reactReduxLocalization && window.reactReduxLocalization.messages) {
        return window.reactReduxLocalization.messages;
    }
    return {
        en: {
            a: {
                b: {
                    c: 'Hello, I\' am the c',
                    d: 'Hello, I\' am the d',
                    k: 'Hello, I\' am the d with vars {0}',
                    j: 'Test with named variables {name} {surname}',
                    variable: 'IAmAVariable'
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
        it: {
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
}

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