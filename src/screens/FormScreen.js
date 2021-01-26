import React, { Component } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Field, reduxForm } from 'redux-form'
import CustomizedInput from '../common/components/CustomizedInput';

class FormScreen extends Component {

    constructor() {
        super()
        this.state = {
            firstVar: "It display using state"
        }

    }
    render() {
        return (
            <View >
                <Field
                    name="email"
                    placeholder="Email"
                    secureTextEntry
                    component={CustomizedInput}
                />

                <Field
                    name="firstName"
                    component={TextInput}
                    type="text"
                    placeholder="First Name"
                />
            </View>
        );

    }

}

export default reduxForm({
    form: 'simple',
})(FormScreen)