import { REDUCER_NAME } from './constants';
import LocalizationReducer from './state/reducers';
import { setMessage, setLanguage } from './state/actions';
import Translator from './components/Translator';

export {
    REDUCER_NAME,
    LocalizationReducer,
    setMessage,
    setLanguage
}

export default Translator;