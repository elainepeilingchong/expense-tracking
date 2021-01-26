
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ScaledSheet } from 'react-native-size-matters';
import EText from './EText';
import { TouchableOpacity, View } from 'react-native';
import { COLORS } from '../style/colorStyle';
import textStyle from '../style/textStyle';

const EButton = (props) => {

    const [buttonStyle, setButtonStyle] = useState([]);
    const [disabledButtonStyle, setDisabledButtonStyle] = useState([]);

    const [textStyle, setTextStyle] = useState([]);

    const generateStyle = () => {
        let tStyle = [];
        let bStyle = [];
        let dbStyle = []
        if (props.textOnlyButton) {
            tStyle.push(styles.textOnlyTextStyle)
            bStyle.push(styles.textOnlyButtonStyle)
        } else if (props.roundButton) {
            tStyle.push(styles.textStyle)
            bStyle.push(styles.roundButtonStyle)
            dbStyle.push(styles.disabledButton)
        } else {
            tStyle.push(styles.textStyle)
            bStyle.push(styles.buttonStyle)
            dbStyle.push(styles.disabledButton)
        }
        if (props.full) {
            bStyle.push({ width: '100%' })
        }
        if (props.textAlign) {
            if (props.textAlign === "left") {
                tStyle.push({ textAlign: 'left' })

            } else if (props.textAlign === "right") {
                tStyle.push({ textAlign: 'right' })

            }
        }

        if (props.iconLeft|| props.iconRight|| props.imageLeft || props.imageRight){
            bStyle.push(styles.iconPadding)
        }
        //If have customized style passed
        if (props.buttonStyle) {
            bStyle.push(props.buttonStyle)
        }
        if (props.textStyle) {
            tStyle.push(props.textStyle)
        }
       
        setButtonStyle(bStyle);
        setTextStyle(tStyle);
        setDisabledButtonStyle(dbStyle);

    }
    const renderLeftView = () => {
        if (props.iconLeft) {
            return (
            <View style={styles.leftViewStyle}>
                {props.iconLeft}
            </View>)

        } else if (props.imageLeft) {
            return (<View style={styles.leftViewStyle}>
            {props.imageLeft}
        </View>)
        }

        return null;
    }

    const renderRightView = () => {
        if (props.iconRight) {
            return (
            <View style={styles.rightViewStyle}>
                {props.iconRight}
            </View>)

        } else if (props.imageRight) {
            return (<View style={styles.rightViewStyle}>
            {props.imageRight}
        </View>)
        }

        return null;
    }
    useEffect(() => {
        generateStyle();

    }, [])
    if (buttonStyle.length == 0 || textStyle.length == 0 || disabledButtonStyle.length === 0) {
        return (<></>);
    }
    return (
        <TouchableOpacity
            onPress={props.onPress}
            onChange={props.onChange}
            disabled={props.disabled}
            >
            <View  style={[buttonStyle, props.disabled ? disabledButtonStyle : {}]}>
                {renderLeftView()}
                <EText style={textStyle} value={props.title} />
                {renderRightView()}

            </View>

        </TouchableOpacity>
    );
};
const styles = ScaledSheet.create({
    buttonStyle: {
        borderRadius: '10@ms',
        height: '40@vs',
        width: '150@ms',
        backgroundColor: COLORS.darkBrown,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '5@ms',
        paddingBottom: '5@ms',
        paddingRight: '15@ms',
        paddingLeft: '15@ms',
        flexDirection: 'row',
    },
    roundButtonStyle:{
        borderRadius: 100/2,
        height: '40@vs',
        width: '150@ms',
        backgroundColor: COLORS.darkBrown,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '5@ms',
        paddingBottom: '5@ms',
        paddingRight: '15@ms',
        paddingLeft: '15@ms',
        flexDirection: 'row',
    },
    disabledButton: {
        opacity: 0.6,
    },
    textStyle: {
        ...textStyle.regular9,
        textAlign: 'center',
        color: COLORS.white,
        width: '100%',
    },
    leftViewStyle:{
    },
    rightViewStyle:{
    },
    textOnlyTextStyle: {
        color: 'white',
        margin: 0,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        padding: 0,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
    },
    textOnlyButtonStyle: {
        margin: 0,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 4,
        marginRight: 4,
        padding: 0,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        textAlign: 'center',

    },
    iconPadding:{
        paddingRight: '30@ms',
        paddingLeft: '30@ms'
    }
})
EButton.prototype = {
    textOnlyButton: PropTypes.bool,
}
EButton.defaultProps = {
    textOnlyButton: false,
}

export default EButton;
