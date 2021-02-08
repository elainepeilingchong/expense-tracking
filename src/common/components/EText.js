
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Text } from "react-native";
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from '../styles/colorStyle';
import textStyle from '../styles/textStyle';

const EText = (props) => {

    const [defaultStyle, setDefaultStyle] = useState(styles.textStyle)

    useEffect(() => {
        if (props.greyText) {
            setDefaultStyle(styles.greyTextStyle)
        }
    }, [])
    return (
        <Text  {...props.inputProps} textAlignVertical='center' style={[ defaultStyle, props.style, props.center ? styles.centerTextStyle : null, props.type]}>{props.value?props.value: props.children }</Text>
    );
};
EText.prototype = {
    value: PropTypes.string,
    greyText: PropTypes.bool,
    center: PropTypes.bool,
    type: PropTypes.string,

}
EText.defaultProps = {
    value: "",
    greyText: false,
    center: false,
    type: 'p'
}
const styles = ScaledSheet.create({
    textStyle: {
        ...textStyle.regular7,
        color: COLORS.black,
    },
    greyTextStyle: {
        color: COLORS.greyText

    },
    centerTextStyle: {
        textAlign: 'center',
    },
});
export default EText;
