
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { moderateScale, ScaledSheet, verticalScale } from 'react-native-size-matters';
import textStyle from '../styles/textStyle';
import { TouchableOpacity, Text, View, TextInput, Image } from 'react-native';
import { COLORS } from '../styles/colorStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePicker from '@react-native-community/datetimepicker';
import EText from './EText';
import EButton from './EButton';
import { isIOS } from '../utils/screenUtil';

const CustomizedInput = (props) => {
    const [textHidden, setTextHidden] = useState(true);
    const [showPicker, setShowPicker] = useState(false);
    const { input, secureTextEntry, label, type, meta: { touched, error, warning }, autoCompleteType, disabled, datePicker, picker, placeholder, timePicker, ...inputProps } = props;
    const [tempDate, setTempDate] = useState(input.value ? input.value : '1970-01-01');
    const [pickerType, setPickerType] = useState(timePicker ? 'time' : 'date');
    /*
     Decides whether to show the 'Show/Hide' password button or not
    */
    const renderSecureToggle = () => {
        const { secureTextEntry } = props;

        if (secureTextEntry) {
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginLeft: moderateScale(5), marginRight: moderateScale(5) }}>
                    <TouchableOpacity onPress={toggleTextVisibility} ><Icon name={textHidden ? 'eye' : 'eye-slash'} size={30} color="#000" /></TouchableOpacity>
                </View>
            );
        }

        return null;
    }
    const toggleTextVisibility = () => {
        setTextHidden(!textHidden);
    };

    const onSaveDate = () => {
        if (tempDate) {
            input.onChange(tempDate);
        }
        setShowPicker(false)
    }

    if (datePicker || timePicker) {
        return (
            <View>
                <View style={styles.itemStyle}>
                    {props.iconImage ? <Image source={props.iconImage} style={styles.iconStyle} />
                        : <View style={styles.iconStyle} />}
                    <View style={{ flexDirection: 'column', height: verticalScale(40), justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => setShowPicker(true)}>
                            <Text style={[textStyle.regular7point5, { marginLeft: moderateScale(6) }, input.value ? {} : { color: COLORS.greyText }]}>{input.value ? timePicker ? input.value.substring(11, 16) : input.value.substring(0, 10) : placeholder + 'date'}</Text>
                        </TouchableOpacity>
                        {touched && error !== undefined ? <Text style={{ color: COLORS.redErrorText }}>{error}</Text> : null}

                    </View>
                </View>
                {showPicker && isIOS() &&
                    (<View style={{ flexDirection: 'column', backgroundColor: COLORS.white, paddingLeft: verticalScale(10), paddingRight: verticalScale(10) }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <EText>Date: {timePicker ? tempDate.substring(11, 16) : tempDate.substring(0, 10)} </EText>
                            <EButton textOnlyButton onPress={onSaveDate} title="Save" />

                            <EButton textOnlyButton onPress={() => { setShowPicker(false) }} title="X" />
                        </View>
                        <DateTimePicker
                            testID="inputDateTimePickerIOS"
                            value={new Date(tempDate)}
                            mode={pickerType}
                            is24Hour={false}
                            display="default"
                            onChange={(event, date) => {
                                if (date) {
                                    if (datePicker && input.value && input.value.substring(0, 10) != '1970-01-01') {
                                        setTempDate(date.toISOString().substring(0, 11) + input.value.substring(11))
                                    } else if (timePicker && input.value && input.value.substring(0, 10) != '1970-01-01') {
                                        setTempDate(input.value.substring(0, 11) + date.toISOString().substring(11))
                                    } else {
                                        setTempDate(date.toISOString())
                                    }
                                }
                            }}
                            maximumDate={new Date()}
                            locale="en"
                            style={{ width: '100%', backgroundColor: "white" }}
                        />
                    </View>)
                }

                {showPicker && !isIOS() &&

                    <DateTimePicker
                        testID="inputDateTimePickerAndroid"
                        value={tempDate ? new Date(tempDate) : new Date("1970-01-01")}
                        mode={pickerType}
                        is24Hour={false}
                        display="default"
                        onChange={(event, date) => {
                            if (date) {
                                input.onChange(date.toISOString().substring(0, 10));
                            }
                            setShowPicker(false)
                        }}
                        maximumDate={new Date()}
                        locale="en"
                        style={{ width: '100%', backgroundColor: "white" }}
                    />

                }
            </View>)

    }
    if (picker) {
        return (
            <View>
                <View style={styles.itemStyle}>
                    {/* <Image source={props.iconImage} style={styles.iconStyle} /> */}
                    {/* <Picker
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
                    </Picker> */}
                </View>
            </View>
        )

    }

    return (
        <View style={styles.itemStyle}>
            {/* <TouchableOpacity regular error={touched && error !== undefined} style={[styles.itemStyle]}> */}
            <TextInput
                {...inputProps}
                autoCapitalize='none'
                autoCorrect={false}
                autoCompleteType={autoCompleteType}
                style={styles.inputStyle}
                secureTextEntry={secureTextEntry && textHidden}
                onChangeText={input.onChange}
                onClose={input.onClose}
                // inlineImageLeft={secureTextEntry ? renderSecureToggle(): null }
                // value={value}
                // underlineColorAndroid="rgba(0,0,0,0)"
                underlineColorAndroid="transparent"
                placeholderTextColor={
                    props.placeholderTextColor
                        ? props.placeholderTextColor
                        : 'rgba(0,0,0,0)'
                }
                editable={!disabled}
            />
            <View>
                {renderSecureToggle()}
            </View>
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
    disabled: PropTypes.bool,
    datePicker: PropTypes.bool,
    picker: PropTypes.bool,

}
CustomizedInput.defaultProps = {
    autoCompleteType: 'off',
    disabled: false
}

const styles = ScaledSheet.create({
    itemStyle: {
        // width: '100%',
        marginTop: '5@vs',
        borderRadius: '5@ms',
        backgroundColor: 'transparent',
        flexDirection: 'row',
        borderColor: 'gray',
        borderWidth: 1,
        marginLeft: '5@ms',
        marginRight: '5@ms',
        paddingLeft: '5@ms',
    },
    inputStyle: {
        ...textStyle.regular8,
        height: '40@vs',
        flex: 2
    },

});
export default CustomizedInput;
