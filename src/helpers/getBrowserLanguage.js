const getBrowserLanguage = () => {
    if(window && window.navigator && window.navigator.language) {
        return window.navigator.language;
    } else if(window && window.navigator && window.navigator.userLanguage) {
        return window.navigator.userLanguage;
    }
    return null;
}

export default getBrowserLanguage;