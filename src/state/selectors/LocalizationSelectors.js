import React, { Fragment } from 'react';
import get from './../../helpers/get';
import { REDUCER_NAME } from './../../constants/languages';

export const getBaseLanguage = state => {
    if(!state[REDUCER_NAME]) {
        return null;
    }
    return state[REDUCER_NAME].baseLanguage;
}
export const getCurrentLanguage = state => {
    if(!state[REDUCER_NAME]) {
        return null;
    }
    return state[REDUCER_NAME].currentLanguage;
}
export const getMessages = state => {
    if(!state[REDUCER_NAME]) {
        return null;
    }
    return state[REDUCER_NAME].messages;
}
export const getCurrentLanguageMessages = state => {
    if(!state[REDUCER_NAME]) {
        return null;
    }
    const currentLanguage = getCurrentLanguage(state);
    const messages = getMessages(state);
    if(messages[currentLanguage]) {
        return messages[currentLanguage];
    }
    return {};
}

export const getBaseLanguageMessages = state => {
    if(!state[REDUCER_NAME]) {
        return null;
    }
    const baseLanguage = getBaseLanguage(state);
    const messages = getMessages(state);
    if(messages[baseLanguage]) {
        return messages[baseLanguage];
    }
    return {};
}
const getTranslationProps = (props, key) => {
    if(!key) {
        return props;
    }
    let updatedProps = props[key];
    if(!updatedProps.vars) {
        updatedProps = {
            ...updatedProps,
            vars: {
                counter: props.counter
            }
        }
    }
    return updatedProps;
}
export const getTranslation = (state, props) => {
    if(!state[REDUCER_NAME]) {
        return null;
    }
    if(props.counter === undefined) {
        return getSingularTranslation(state, props);
    } else if(props.counter === 0 && props.empty) {
        return getSingularTranslation(state, getTranslationProps(props, 'empty'));
    } else if(props.counter === 1 && props.singular) {
        return getSingularTranslation(state, getTranslationProps(props, 'singular'));
    } else if(props.counter > 1 && props.plural) {
        return getSingularTranslation(state, getTranslationProps(props, 'plural'));
    }
    return null;
}
export const getSingularTranslation = (state, props) => {
    if(!state[REDUCER_NAME]) {
        return null;
    }
    const currentLanguageMessages = getCurrentLanguageMessages(state);
    let translation = get(currentLanguageMessages, props.strings);
    if(!translation) {
        const baseLanguageMessages = getBaseLanguageMessages(state);
        translation = get(baseLanguageMessages, props.strings);
    }
    const parentesisRegex = /({[^\}]+})/;
    let translationSplitted = translation.split(parentesisRegex).filter(e => e);
    if(props.vars && typeof props.vars === 'object') {
        translationSplitted.forEach((v, i) => {
            if(v.match(parentesisRegex) && v.replace(/[{()}]/g, '')) {
                translationSplitted[i] = props.vars[v.replace(/[{()}]/g, '')];
            }
            translationSplitted[i] = <Fragment key={`translation_${i}`}>{translationSplitted[i]}</Fragment>;
        })
    }
    if(translationSplitted.length === 0) {
        const currentLanguage = getCurrentLanguage(state);
        const packageCss = 'color: #0088a3; font-size: 18px; font-weight: bold;';
        const languageCss = 'color: white; background-color: #0088a3; padding: 4px 6px; border-radius: 4px;';
        const stringsCss = 'color: black; background-color: #62ebff; padding: 4px 6px; border-radius: 4px;';
        const resetCss = 'color: inherit; background-color: inherit; padding: 0; border-radius: 0;';
        console.info(
            '%cReact Redux Localization%c\n😱 Missing translation in %c%s%c for strings: %c%s',
            packageCss,
            resetCss,
            languageCss,
            currentLanguage,
            resetCss,
            stringsCss,
            props.strings,
        );
    }
    return translationSplitted;
}