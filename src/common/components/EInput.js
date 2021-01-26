import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import BaseComponent from '../basic/BaseComponent';

class EInput extends BaseComponent {
    render() {
        return (
            <TextInput
                ref={c => {
                    this._textInput = c;
                    this._root = c;
                }}
                editable={!this.props.disabled}
                underlineColorAndroid="rgba(0,0,0,0)"
                placeholderTextColor={
                    this.props.placeholderTextColor
                        ? this.props.placeholderTextColor
                        : 'rgba(0,0,0,0)'
                }
                {...this.props}
            />
        );
    }
}

EInput.propTypes = {
    ...TextInput.propTypes,
    style: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number,
        PropTypes.array
    ])
};


export default EInput;
