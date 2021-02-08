import React, { Component } from 'react';
import { Text, SafeAreaView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

export default class HomeScreen extends Component {

    constructor() {
        super()
        this.state = {
            firstVar: "It display using state"
        }

    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
            <Text>Page content</Text>
          </SafeAreaView>
        );

    }
}


const styles = ScaledSheet.create({
    containerStyle: {},
});


