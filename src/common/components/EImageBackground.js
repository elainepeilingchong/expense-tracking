
import React from 'react';
import { moderateScale } from 'react-native-size-matters';
import PropTypes from 'prop-types';
import {ImageBackground, Image, StyleSheet, View} from 'react-native';

const EImageBackground = (props) => {

    return (<View style={styles.container}>
        <ImageBackground source={props.background} style={styles.imageBackgroundStyle}>
            {!props.children && <Image source={props.logo} style={styles.imageLogoStyle} />}
            {props.children && props.children}
        </ImageBackground>
    </View>)
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    imageBackgroundStyle: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
    },
    imageLogoStyle: {
        width: '70%',
        marginLeft: moderateScale(10),
        marginRight: moderateScale(10),
        resizeMode: "contain",

    },
});

EImageBackground.prototype = {
    background: PropTypes.any,
    logo: PropTypes.any,
    children: PropTypes.element
}

EImageBackground.defaultProps = {
    background: require('../assets/background.jpg'),
    logo: require('../assets/logo.png'),
    children: null,
}
export default CustomizedImageBackground;
