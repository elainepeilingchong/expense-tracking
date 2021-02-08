import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import BaseComponent from '../basic/BaseComponent';
import { TouchableOpacity } from 'react-native-gesture-handler';

class EItem extends BaseComponent {
    render() {
        return (
            <EItem
                {...this.props}
            />
        );
    }
}

EItem.propTypes = {
    ...TouchableOpacity.propTypes,
    style: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number,
        PropTypes.array
    ])
};


export default EItem;
