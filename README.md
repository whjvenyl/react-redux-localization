React library for manage app localization through redux
# Installation

    npm install --save @ipno/react-redux-localization

# Documentation
This documentation is published on [https://ipno84.github.io/react-redux-localization/](https://ipno84.github.io/react-redux-localization/)

This module expose a set of API that help you to manage your app translation using redux state manager system.
In order to use this module you need, at least, to inject the provided reducer into your redux store:

    import { createStore, combineReducers } from "redux";
    import yourAppReducer from "./../reducers/yourAppReducer";
    import { REDUCER_NAME, LocalizationReducer } from '@ipno/react-redux-localization';
    const configureStore = (initialState) => {
	    const store = createStore(
		    combineReducers({
			    appReducer: yourAppReducer,
				[REDUCER_NAME]: LocalizationReducer
	        }),
	        initialState
	    );
        return store;
    }
    
    export default configureStore;

Now you have the localization reducer in your store, but you are not able to translate anything because you don't have any message yet.

react-redux-localization expose also a set of actions that allow you to *set the current used language* and to *store your translation strings*

    import { setMessages, setLanguages } from '@ipno/react-redux-localization';

# API

## setMessages - reduxAction

This redux action accept an object as payload that contains all you translation strings. The root properties of this object will be the language codes.

So, the object will look like this:

    {
	    "en-US": {
		    "one": "One",
		    "two": "Two"
	    },
	    "it": {
		    "one": "Uno",
		    "two": "Due"
	    }
    }

You can set language messages using the redux action exposed after the application has been initialized or you can pass the object before application init in a global variable under *window.reactReduxLocalization.messages*

## setLanguage - reduxAction

This action accept a string as payload and it will identify your application current used language. The reducer contains two strings to identify the current language of your application.

- The first one is called *baseLanguage*. By default it's **en** but you can set it using a global variable under *window.reactReduxLocalization.baseLanguage*.

- The second one is called *currentLanguage*. You can provide it before application init using a global variable under *window.reactReduxLocalization.currentLanguage*. If you don't provide it through a global variable the system will set it by getting the browser language and, in case it has no language, the default one will be **en**
  

## Translator - Component

react-redux-localization expose a component too that will take care of your translations using the props in store and the one you pass to it.

You can import it your components

    import Translator from '@ipno/react-redux-localization';

The component can receive and handle the props below:

**strings** - it identify a specific string in object messages and it is written as a string that contains dotted object properties:

    en: {
	    form: {
		    input: {
			    placeholder: "Hello I am a placeholder text"
		    }
	    }
    }
    
    <Translator strings="form.input.placeholder"/>

**vars** - it can be and *Array* or an *Object*. If the string we want to translate contains {0} {1} or {name} {surname} they will be replaced with the relative elements we pass in vars prop:

    en: {
	    customer: {
		    info: {
			    nameInfo: "My name is {0}"
		    }
	    }
    }
    
    <Translator
	    strings="customer.info.nameInfo"
	    vars={['Marco']}
    />
    
    en: {
	    customer: {
		    info: {
			    nameInfo: "My name is {name}"
		    }
	    }
    }
    
    <Translator
	    strings="customer.info.nameInfo"
	    vars={{name: 'Marco'}}
    />

Off course in vars you can pass another Translator component.

**prefix** - It can be a string, an array or another component (also a Translator component) and it will be placed right before the translation.

**suffix** - It can be a string, an array or another component (also a Translator component) and it will be placed right after the translation.

**fallbackString** - it's the string you want to render in case the selector has not found any translation

The Translator component can also manage counterable translations. In order to do this the translation string has to contain {counter} and you have to pass 4 props to the component:

-  **counter**: a number that will be the element that can make the component choosing for a plural or singular form.

-  **singular**: it will be used if the counter prop is equal to 1.

-  **empty**: it will be used if the counter prop is equal to 0.

-  **plural**: it will be used if the counter props is more than 1

singular, empty and plural will accept an object that has to contain strings ad properties and can manage all the props you can pass to Translator component.


# Imports

You can import this package resources from the main entry of the module or directly with a named import as shown below

    import { REDUCER_NAME } from '@ipno/react-redux-localization';

Or you can import it directly from the proper module position *(recommended)* as shown in the example below

    import Translator from '@ipno/react-redux-localization';
    import { REDUCER_NAME } from '@ipno/react-redux-localization/constants/languages';
    import { LocalizationReducer } from '@ipno/react-redux-localization/state/reducers/LocalizationReducer';
    import { setMessage, setLanguage } from '@ipno/react-redux-localization/state/actions/LocalizationActions';


# Why??!??!??

Someone of you is asking to himself "why do I have to use this library for managing my app translations?".

- It's powerful
- It's lightweight [![install size](https://badgen.net/bundlephobia/minzip/@ipno/react-redux-localization)](https://bundlephobia.com/result?p=@ipno/react-redux-localization)
- It's simple

I will accept any contribute in terms of coding or any suggestion about how to improve this module.