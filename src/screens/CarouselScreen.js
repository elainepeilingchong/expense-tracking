import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class CarouselScreen extends Component {

    constructor() {
        super()
        this.state = {
            firstVar: "It display using state"
        }

    }
    render() {
        return (
            <View >
                <Text> {this.state.firstVar}</Text>
            </View>
        );

    }
}

