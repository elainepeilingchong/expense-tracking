
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { moderateScale, ScaledSheet } from 'react-native-size-matters';
import textStyle from '../styles/textStyle';
import { TouchableOpacity, Text, View, TextInput } from 'react-native';
import { COLORS } from '../styles/colorStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import EInput from '../components/EInput'

const MyIcon = <Icon name="rocket" size={30} color="#900" />;
const CustomizedInput = (props) => {
    const [textHidden, setTextHidden] = useState(true);
    const { input, secureTextEntry, label, type, meta: { touched, error, warning }, autoCompleteType, disabled } = props;


    /*
     Decides whether to show the 'Show/Hide' password button or not
    */
    const renderSecureToggle = () => {
        const { meta, secureTextEntry } = props;

        // if (secureTextEntry && meta.dirty) {
        //     console.log("secureTextEntry")
        //     return (
        //         <View style={{ flex: 1 }}>
        //             <TouchableOpacity onPress={toggleTextVisibility} >
        //                 <Icon name={textHidden ? 'eye' : 'eye-slash'} size={14} color="#000" />;
        //         </TouchableOpacity>
        //         </View>
        //     );
        // }

        return <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={toggleTextVisibility} > <Icon name="rocket" size={30} color="#900" /></TouchableOpacity>
            {/* <Icon name={textHidden ? 'eye' : 'eye-slash'} size={14} color="#000" />; */}
        </View>;
    }

    const toggleTextVisibility = () => {
        setTextHidden(!textHidden);
    };


    return (
        <View style={styles.itemStyle}>
            {/* <TouchableOpacity regular error={touched && error !== undefined} style={[styles.itemStyle]}> */}
            <TextInput
                {...props}
                autoCapitalize='none'
                autoCorrect={false}
                autoCompleteType={autoCompleteType}
                style={styles.inputStyle}
                // style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                // placeholder={placeholder}
                secureTextEntry={secureTextEntry && textHidden}
                // inlineImageLeft={secureTextEntry ? renderSecureToggle(): null }
                // onChangeText={text => onChangeText(text)}
                // value={value}
                // underlineColorAndroid="rgba(0,0,0,0)"
                // placeholderTextColor={
                //     props.placeholderTextColor
                //         ? props.placeholderTextColor
                //         : 'rgba(0,0,0,0)'
                // }
                editable={!disabled}
            />

            {/* <EInput placeholder={placeholder} {...input} autoCapitalize='none' autoCorrect={false} style={styles.inputStyle} secureTextEntry={secureTextEntry && textHidden} /> */}
            <View>
                {renderSecureToggle()}

            </View>
            {/* <Text>ghel</Text> */}
            {/* </TouchableOpacity> */}
            {touched && error !== undefined && <Text style={{ color: COLORS.redErrorText, paddingRight: moderateScale(3) }}>{error}</Text>}
        </View>
    );



};

CustomizedInput.prototype = {
    placeholder: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    labelStyle: PropTypes.object,
    containerStyle: PropTypes.object,
    autoCompleteType: PropTypes.string,
    disabled: PropTypes.bool

}
CustomizedInput.defaultProps = {
    autoCompleteType: 'off',
    disabled: false
}

const styles = ScaledSheet.create({
    itemStyle: {
        width: '100%',
        marginTop: '5@ms',
        borderRadius: '10@ms',
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    inputStyle: {
        ...textStyle.regular8,
        height: '40@ms',
        borderColor: 'gray',
        borderWidth: 1,
        flex: 2
    },

});
export default CustomizedInput;
