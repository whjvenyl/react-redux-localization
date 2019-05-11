# react-redux-localization

React library for manage app localization through redux

## Installation

    npm install --save @ipno84/react-redux-localization

## Documentation
This documentation is published on [google.com](http://google.com)

This module expose a set of API that help you to manage your app translation using redux state manager system.
In order to use this module you need, at least, to inject the provided reducer into your redux store:

    import { createStore, combineReducers } from "redux";  
    import yourAppReducer from "./../reducers/yourAppReducer";
    import  { REDUCER_NAME, LocalizationReducer }  from @ipno84/react-redux-localization';
    
    const configureStore = (initialState) => {  
      const store = createStore(
	      combineReducers({
		      appReducer: yourAppReducer,
		      [REDUCER_NAME]: LocalizationReducer
	      }),
	      state
	  );
      return store;
    }
    
    export default configureStore;