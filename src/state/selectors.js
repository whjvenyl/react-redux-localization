import React, { Fragment } from 'react';
import get from './../../helpers/get';
import { REDUCER_NAME } from './../../constants';

export const getBaseLanguage = state => state[REDUCER_NAME] ? state[REDUCER_NAME].baseLanguage : null;
export const getCurrentLanguage = state => state[REDUCER_NAME] ? state[REDUCER_NAME].currentLanguage : null;
export const getMessages = state => state[REDUCER_NAME] ? state[REDUCER_NAME].messages : null;
export const getCurrentLanguageMessages = state => {
    if(!state[REDUCER_NAME]) {
        return null;
    }
    const currentLanguage = getCurrentLanguage(state);
    const messages = getMessages(state);
    if(currentLanguage && messages[currentLanguage]) {
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
    if(baseLanguage && messages[baseLanguage]) {
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
        updatedProps = { ...updatedProps, vars: { counter: props.counter } };
    }
    return updatedProps;
}
export const getTranslation = (state, props) => {
    if(!state[REDUCER_NAME]) {
        return null;
    }
    let translation;
    let tmpProps = {...props};
    if(props.counter === 0 && props.empty) {
        tmpProps = getTranslationProps(props, 'empty');
    } else if(props.counter === 1 && props.singular) {
        tmpProps = getTranslationProps(props, 'singular');
    } else if(props.counter > 1 && props.plural) {
        tmpProps = getTranslationProps(props, 'plural');
    }
    translation = getSingularTranslation(state, tmpProps);
    if(translation) {
        return translation;
    } else if(!translation && props.fallbackString) {
        return fallbackString;
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
    return translationSplitted;
}