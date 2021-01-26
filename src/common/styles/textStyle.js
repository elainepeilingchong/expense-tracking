import { PixelRatio } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { responsivePixelSize } from '../utils/screenUtil';

const ptToPixelScale = PixelRatio.get() < 2 ? 1.7 : 2.0;
const ptPoint01 = responsivePixelSize(0.01 * ptToPixelScale);
const ptPoint4 = responsivePixelSize(0.4 * ptToPixelScale);
const ptPoint5 = responsivePixelSize(0.5 * ptToPixelScale);
const ptPoint6 = responsivePixelSize(0.6 * ptToPixelScale);
const ptPoint8 = responsivePixelSize(0.8 * ptToPixelScale);
const ptPoint9 = responsivePixelSize(0.9 * ptToPixelScale);
const pt1 = responsivePixelSize(1 * ptToPixelScale);
const pt1Point5 = responsivePixelSize(1.5 * ptToPixelScale);
const pt4 = responsivePixelSize(4 * ptToPixelScale);
const pt5 = responsivePixelSize(5 * ptToPixelScale);
const pt5point5 = responsivePixelSize(5.5 * ptToPixelScale);
const pt6 = responsivePixelSize(6 * ptToPixelScale);
const pt6point5 = responsivePixelSize(6.5 * ptToPixelScale);
const pt7 = responsivePixelSize(7 * ptToPixelScale);
const pt7point5 = responsivePixelSize(7.5 * ptToPixelScale);
const pt8 = responsivePixelSize(8 * ptToPixelScale);
const pt8point5 = responsivePixelSize(8.5 * ptToPixelScale);
const pt9 = responsivePixelSize(9 * ptToPixelScale);
const pt9_5 = responsivePixelSize(9.5 * ptToPixelScale);
const pt10 = responsivePixelSize(10 * ptToPixelScale);
const pt11 = responsivePixelSize(11 * ptToPixelScale);
const pt12 = responsivePixelSize(12 * ptToPixelScale);
const pt12_5 = responsivePixelSize(12.5 * ptToPixelScale);
const pt13 = responsivePixelSize(13 * ptToPixelScale);
export const pt14 = responsivePixelSize(14 * ptToPixelScale);
const pt15 = responsivePixelSize(15 * ptToPixelScale);
const pt16 = responsivePixelSize(16 * ptToPixelScale);
const pt17 = responsivePixelSize(17 * ptToPixelScale);
const pt18 = responsivePixelSize(18 * ptToPixelScale);
const pt19 = responsivePixelSize(19 * ptToPixelScale);
const pt20 = responsivePixelSize(20 * ptToPixelScale);
const pt21 = responsivePixelSize(21 * ptToPixelScale);
const pt22 = responsivePixelSize(22 * ptToPixelScale);
const pt25 = responsivePixelSize(25 * ptToPixelScale);
const pt23 = responsivePixelSize(23 * ptToPixelScale);
const pt24 = responsivePixelSize(24 * ptToPixelScale);
const pt28 = responsivePixelSize(28 * ptToPixelScale);
const pt37 = responsivePixelSize(37 * ptToPixelScale);
const pt50 = responsivePixelSize(50 * ptToPixelScale);
const pt52 = responsivePixelSize(50 * ptToPixelScale);
const pt60 = responsivePixelSize(60 * ptToPixelScale);
const pt70 = responsivePixelSize(70 * ptToPixelScale);
const pt80 = responsivePixelSize(80 * ptToPixelScale);


const fontFamilyRegular = 'Roboto';
const fontFamilyBold = 'Roboto-Bold';

export default ScaledSheet.create({
    //0.00 in home screen
    regular23: {
        fontFamily: fontFamilyRegular,
        fontSize: `${pt23}@ms0.3`,
        lineHeight: `${pt28}@ms0.3`,

    },
    regular14: {
        fontFamily: fontFamilyRegular,
        fontSize: `${pt14}@ms0.3`,
        lineHeight: `${pt19}@ms0.3`,
    },
    regular13: {
        fontFamily: fontFamilyRegular,
        fontSize: `${pt13}@ms0.3`,
    },
    regular12: {
        fontFamily: fontFamilyRegular,
        fontSize: `${pt12}@ms0.3`,
    },
    regular10: {
        fontFamily: fontFamilyRegular,
        fontSize: `${pt10}@ms0.3`,
    },
    //Sub heading, main paragraph
    regular11:{
        fontFamily: fontFamilyRegular,
        fontSize: `${pt11}@ms0.3`,
    },
    //total, will expired etc
    regular9:{
        fontFamily: fontFamilyRegular,
        fontSize: `${pt9}@ms0.3`,
    },
    regular8:{
        fontFamily: fontFamilyRegular,
        fontSize: `${pt8point5}@ms0.3`,
    },
    regular8point5:{
        fontFamily: fontFamilyRegular,
        fontSize: `${pt8point5}@ms0.3`,
    },
    regular7:{
        fontFamily: fontFamilyRegular,
        fontSize: `${pt7}@ms0.3`,
    },
    regular7point5:{
        fontFamily: fontFamilyRegular,
        fontSize: `${pt7point5}@ms0.3`,
    },
    regular6point5:{
        fontFamily: fontFamilyRegular,
        fontSize: `${pt6point5}@ms0.3`,
    },
    regular5point5:{
        fontFamily: fontFamilyRegular,
        fontSize: `${pt5point5}@ms0.3`,
    },
    bold7:{
        fontFamily: fontFamilyBold,
        fontSize: `${pt7}@ms0.3`,

    },
    bold8:{
        fontFamily: fontFamilyBold,
        fontSize: `${pt8}@ms0.3`,

    },
    bold9:{
        fontFamily: fontFamilyBold,
        fontSize: `${pt9}@ms0.3`,

    },
    bold10:{
        fontFamily: fontFamilyBold,
        fontSize: `${pt10}@ms0.3`,

    },
    bold11:{
        fontFamily: fontFamilyBold,
        fontSize: `${pt11}@ms0.3`,

    },
    bold12:{
        fontFamily: fontFamilyBold,
        fontSize: `${pt12}@ms0.3`,

    }
});