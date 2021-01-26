
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
// import { StyleSheet } from 'react-native';
import { Button, Icon, Left, Right, Title, View, Text } from 'native-base';
import EmptyContainer from './EmptyContainer';
import { ScaledSheet } from 'react-native-size-matters';
import { COLORS } from '../style/colorStyle';
import textStyle from '../style/textStyle';
import CustomizedText from './CustomizedText';

const CustomizedHeader = (props) => {

    return (<View style={[styles.headerStyle, props.headerStyle]}>
        {props.showLeftIcon ?
            (<Button transparent
                style={styles.headerButtonStyle}
                onPress={props.leftIconFunc}>
                <Icon
                    name={props.leftIconName}
                    type={props.leftIconType}
                    style={[styles.iconStyle, props.leftIconStyle]}
                    color={props.leftIconStyle.color}
                />
            </Button>)
            :
            <EmptyContainer />}
        {/* <Text style={styles.headerTextStyle}>Create Account</Text> */}
        {props.title ? <CustomizedText style={[styles.headerTextStyle, props.textStyle]}>{props.title}</CustomizedText> : <View></View>}
        {props.showRightIcon ?
            (<Button transparent
                style={styles.headerButtonStyle}
                onPress={props.rightIconFunc}>
                <Icon
                    name={props.rightIconName}
                    type={props.rightIconType}
                    style={styles.iconStyle} />
            </Button>)
            :
            <EmptyContainer />}
    </View>)
    // return (
    //     <Header noShadow>
    //         {props.showLeftIcon ?
    //             (<Left>
    //                 <Button transparent onPress={props.leftIconFunc}>
    //                     <Icon name={props.leftIconName} type={props.leftIconType} />
    //                 </Button>
    //             </Left>) :
    //             <Left />
    //         }
    //         <Body>
    //             {props.title && <Title>{props.title}</Title>}
    //         </Body>
    //         {props.showRightIcon ?
    //             (<Right>
    //                 <Button transparent>
    //                     <Icon name={props.rightIconName} type={props.rightIconType} />
    //                 </Button>
    //             </Right>) : <Right />}
    //     </Header>
    // );
};
CustomizedHeader.prototype = {
    title: PropTypes.string,
    leftIconName: PropTypes.string,
    rightIconName: PropTypes.string,
    leftIconType: PropTypes.string,
    rightIconType: PropTypes.string,
    leftIconFunc: PropTypes.func,
    rightIconFunc: PropTypes.func,
    showLeftIcon: PropTypes.bool,
    showRightIcon: PropTypes.bool,
    headerStyle: PropTypes.object,
    textStyle: PropTypes.object,
    leftIconStyle: PropTypes.object,

}
CustomizedHeader.defaultProps = {
    title: "",
    leftIconName: "",
    rightIconName: "",
    leftIconType: "",
    rightIconType: "",
    headerStyle: {},
    textStyle: {},
    leftIconStyle: {},
}
const styles = ScaledSheet.create({
    headerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: '30@ms',
        paddingBottom: '20@ms',
        alignItems: 'center',
        width: "100%",
        backgroundColor: COLORS.darkBrown,
    },
    headerButtonStyle: {
        flex: 1,
    },
    headerTextStyle: {
        textAlign: 'center',
        color: COLORS.white,
        ...textStyle.bold11,
    },
    iconStyle: {
        fontSize: 30,
        color: COLORS.white,
    }
});
export default CustomizedHeader;
