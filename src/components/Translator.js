import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { getTranslation } from '../state/selectors';

const stateToProps = (state, ownProps) => ({
    translation: getTranslation(state, ownProps)
})

class Translator extends React.PureComponent {
    shouldComponentUpdate(nextProps, nextState) {
        return(
            this.props.prefix !== nextProps.prefix ||
            this.props.suffix !== nextProps.suffix ||
            this.props.counter !== nextProps.counter ||
            this.props.fallbackString !== nextProps.fallbackString ||
            this.props.vars !== nextProps.vars
        );
    }

    render() {
        const {prefix, translation, suffix} = this.props;
        return (
            <Fragment>
                {prefix}
                {translation}
                {suffix}
            </Fragment>
        );
    }
}

export default connect(stateToProps, null, null, {
    areStatePropsEqual: (next, prev) => next.translation === prev.translation
})(Translator);