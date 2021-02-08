import React, { Component } from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { isThisTypeNode } from 'typescript';
import { storeCategory } from '../common/reduxStore/actions'
import CustomizedInput from '../common/components/CustomizedInput';
import EButton from '../common/components/EButton';

class HomeScreen extends Component {

    constructor() {
        super()
        this.state = {
            firstVar: "It display using state"
        }

    }

    handleFormSubmit = async params => {
        try {
            const addCategory = await this.props.storeCategory(params);
        } catch {

        }
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <SafeAreaView style={styles.container}>
                <Text>Page content</Text>
                <Field
                    style={styles.fieldStyle}
                    name="category_name"
                    placeholder="Email"
                    component={CustomizedInput}
                />
                <Field
                    style={styles.fieldStyle}
                    name="note"
                    placeholder="Note"
                    component={CustomizedInput}
                />
                <Field
                    style={styles.fieldStyle}
                    name="date"
                    datePicker
                    placeholder="Date"
                    component={CustomizedInput}
                />
                <Field
                    style={styles.fieldStyle}
                    name="date"
                    timePicker
                    placeholder="Time"
                    component={CustomizedInput}
                />
                {/* <Field
                    style={styles.fieldStyle}
                    name="picker"
                    picker
                    placeholder="Picker"
                    component={CustomizedInput}
                /> */}
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <EButton title="Add" onPress={handleSubmit(this.handleFormSubmit)} />
                </View>
                <View>
                    {this.props.general.categories && this.props.general.categories.map((item) =>
                        <View key={item.name}><Text>
                            {item.name}
                        </Text></View>)}
                </View>
            </SafeAreaView>);
    }
}


const styles = ScaledSheet.create({
    containerStyle: {},
    fieldStyle: {
        flex: 1,
        height: '40@ms',
    },
});
const mapStateToProps = state => ({
    general: state.general,
});

export default connect(
    mapStateToProps,
    {
        storeCategory
    },
)(
    reduxForm({
        form: 'home',
        destroyOnUnmount: false,
    })(HomeScreen),
);


