import { REDUCER_NAME } from './constants/languages';
import LocalizationReducer from './state/reducers/LocalizationReducer';
import { setMessage, setLanguage } from './state/actions/LocalizationActions';
import Translator from './components/Translator';

export {
    REDUCER_NAME,
    LocalizationReducer,
    setMessage,
    setLanguage
}

export default Translator;