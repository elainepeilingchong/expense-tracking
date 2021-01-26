
import { Button, Icon, Input, Item, Text, Picker } from 'native-base';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { moderateScale, ScaledSheet } from 'react-native-size-matters';
import textStyle from '../style/textStyle';
import { Image, View } from 'react-native';
import { COLORS } from '../style/colorStyle';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-datepicker'

const CustomizedIconInput = (props) => {
    const [textHidden, setTextHidden] = useState(true);
    const [showPicker, setShowPicker] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [keyboardType, setKeyboardType] = useState('default');

    const { disabled, change, placeholder, secureTextEntry, input, label, type, meta: { touched, error, warning }, picker, datePicker } = props;

    const formatDate = (date) =>{
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
    }
    useEffect(() => {
        if (error !== undefined) {
            setHasError(true);
        }
        if (props.number) {
            setKeyboardType('phone-pad')
        }
    })

    /*
     Decides whether to show the 'Show/Hide' password button or not
    */
    const renderSecureToggle = () => {
        const { meta, secureTextEntry } = props;

        if (secureTextEntry && meta.dirty) {
            return (
                <TouchableOpacity onPress={toggleTextVisibility}>
                    <Icon
                        name={textHidden ? 'eye' : 'eye-with-line'}
                        type="Entypo"
                        size={14}
                        color={COLORS.greyText}
                    />
                </TouchableOpacity>
            );
        }

        return null;
    }

    const toggleTextVisibility = () => {
        setTextHidden(!textHidden);
    };

    if (datePicker) {
        return (
            <Item style={styles.itemStyle}>
                {props.iconImage ? <Image source={props.iconImage} style={styles.iconStyle} />
                    : <View style={styles.iconStyle} />}
                <DatePicker
                    style={{ width: 200 }}
                    date={input.value}
                    mode="date"
                    placeholder={placeholder}
                    showIcon = {false}
                    format="YYYY-MM-DD"
                    maxDate={formatDate(new Date())}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        placeholderText: {
                            ...textStyle.regular7point5,
                            paddingLeft: 0, 
                            color: COLORS.greyText,
                        },
                        dateInput: {
                            border: 'none',
                            borderWidth: 0,
                            marginLeft: moderateScale(6), 
                            // justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                        },
                        dateText:{
                            ...textStyle.regular7point5,
                        }
                    }}
                    onDateChange={(date) => { input.onChange(date) }}
                />
            {touched && error !== undefined ? <Text style={{ color: COLORS.redErrorText }}>{error}</Text> : <Text />}

            </Item>)

    }
    if (picker) {
        return (
            <View>
                <Item picker style={styles.itemStyle}>
                    <Image source={props.iconImage} style={styles.iconStyle} />
                    <Picker
                        {...input}
                        mode="dropdown"
                        // iosIcon={<Icon name="arrow-down" />}
                        textStyle={{ paddingLeft: 0, padding: 0, margin: 0, marginLeft: moderateScale(6) }}
                        placeholder="Select your Gender"
                        placeholderStyle={{ paddingLeft: 0, marginLeft: moderateScale(6), color: COLORS.greyText }}
                        placeholderIconColor="#007aff"
                        selectedValue={input.value}
                        onValueChange={(value, index) => input.onChange(value)}
                    >
                        <Picker.Item label="Male" value="MALE" />
                        <Picker.Item label="Female" value="FEMALE" />
                    </Picker>
                </Item>
            </View>
        )

    }
    return (
        <Item style={styles.itemStyle}>
            <Image source={props.iconImage} style={styles.iconStyle} />
            <Input disabled={disabled} style={[textStyle.regular7point5]}  {...input} autoCapitalize='none' autoCorrect={false} placeholder={placeholder} keyboardType={keyboardType} placeholderTextColor={COLORS.greyText} secureTextEntry={secureTextEntry && textHidden} />
            {touched && error !== undefined ? <Text style={{ color: COLORS.redErrorText }}>{error}</Text> : <Text />}
            {renderSecureToggle()}
        </Item>
    );



};


CustomizedIconInput.prototype = {
    placeholder: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    labelStyle: PropTypes.object,
    containerStyle: PropTypes.object,

}
CustomizedIconInput.defaultProps = {

}

const styles = ScaledSheet.create({
    itemStyle: {
        height: moderateScale(40),
    },
    iconStyle: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        marginLeft: moderateScale(10),
        marginRight: moderateScale(10),

    },
});
export default CustomizedIconInput;
