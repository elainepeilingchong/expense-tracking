import React, { Component } from 'react';
import { moderateScale, ScaledSheet } from 'react-native-size-matters';
import { Image, Button, View } from 'react-native';
import { COLORS } from './style/colorStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
const MyIcon = <Icon name="rocket" size={30} color="#900" />;
const coverPhoto = require('../common/assets/drinks-cover.png');
const coverPhoto1 = require('../common/assets/demo/menu/menu-cake.png');

export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            length: props.data.length,
            landing: props.data,
        };
    }
    goToPrevSlide() {
        let index = this.state.activeIndex;
        let length = this.state.length;
        if (index < 1) {
            index = length - 1;
        }
        else {
            index--;
        }
        this.setState({
            activeIndex: index
        });
    }
    goToNextSlide() {
        let index = this.state.activeIndex;
        let length = this.state.length;
        if (index === length - 1) {
            index = 0
        }
        else {
            index++;
        }
        this.setState({
            activeIndex: index
        });
    }

    render() {
        return (
            <View style={
                {
                    flex: 1,
                    width: '100%',
                }
            } >
                <View style={styles.imageContainerStyle}>
                    {this.state.landing.map((item, index) => {
                        if (index === this.state.activeIndex) {
                            return <Image key={`carousel-image=${index}`} source={index === 1 ? coverPhoto1 : coverPhoto} style={styles.imgStyle} />;
                        }
                    }
                    )}
                </View>
                <View style={{ position: 'absolute', flexDirection: 'row', width: '100%', height: moderateScale(200), justifyContent: 'space-between', alignContent: 'center', marginTop: moderateScale(80) }}>
                    <View style={styles.leftButtonContainer}>
                        <Button transparent
                            onPress={() => this.goToPrevSlide()}>
                            <MyIcon/>
                        </Button>
                    </View>

                    <View style={styles.rightButtonContainer}>

                        <Button transparent
                            onPress={() => this.goToNextSlide()}>
                            <Icon
                                name="arrowright"
                                type="AntDesign"
                                style={{ color: COLORS.greyText }}
                            />
                        </Button>
                    </View>
                </View>

                <View style={styles.navigatorContainerStyle}>
                    {this.state.landing && this.state.landing.map((item, index) =>
                        <Button transparent
                            key={`carousel-nav-${index}`}
                            onPress={() => this.goToNextSlide()}>
                            <Icon
                                name="dot-single"
                                type="Entypo"
                                style={{ color: this.state.activeIndex === index ? 'black' : COLORS.greyText }}

                            />
                        </Button>
                    )}
                </View>
            </View>
        );
    }

}
const styles = ScaledSheet.create({
    navigatorContainerStyle: {
        flexDirection: 'row',
        width: '100%',
        height: '200@ms',
        position: 'absolute',
        marginTop: '170@ms',
        alignContent: 'center',
        justifyContent: 'center'
    },
    rightButtonContainer: {
        // position: 'absolute',
        // width: '100%',
        // marginRight: '10@ms'

    },
    leftButtonContainer: {
        // // position: 'absolute',
        // width: '100%',
        // marginLeft: '10@ms'

    },
    imgStyle: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
    imageContainerStyle: {
        height: '200@ms',
        width: '100%',
    },
})