import {
    StyleSheet
} from 'react-native'
import pxToDp from "@/config/pxToDp";
export const Style = StyleSheet.create({
    text: {
        fontSize: pxToDp(24)
    },
    img: {
        width: pxToDp(80),
        height: pxToDp(80)
    },
    bigImg: {
        width: pxToDp(80),
        height: pxToDp(80)
    },
})