import React from 'react';
import { connect } from 'react-redux';
import { getTranslation } from '../../state/selectors/LocalizationSelectors';

const stateToProps = (state, ownProps) => ({
    translation: getTranslation(state, ownProps)
})

class Translator extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                {this.props.prefix}
                {this.props.translation}
                {this.props.suffix}
            </React.Fragment>
        );
    }
}

export default connect(stateToProps, null, null, {
    areStatePropsEqual: (next, prev) => {
        return next.translation === prev.translation
    }
})(Translator);