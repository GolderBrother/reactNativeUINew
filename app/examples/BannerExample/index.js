import React, { Component } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
// import ZKBanner from '@/components/ZKBanner'
const ZKBanner = require('@/components/ZKBanner')

import pxToDp from '@/config/pxToDp';
class BannerExample extends Component {
    onClickBanner = (event) => {
        console.log('react' + event.nativeEvent.value);
    }
    render() {
        const bannerImgs = [
            'http://www.10086.cn/cmpop/images/index/ad1/201609/20160914171036633bj1.jpg',
            'http://www.10086.cn/cmpop/images/index/ad1/201607/201607291033143254wN.jpg',
            'http://www.10086.cn/cmpop/images/index/ad1/201608/20160805134750658S64.jpg',
            'http://www.10086.cn/cmpop/images/index/ad1/201609/20160914115407386UXa.jpg'
        ];
        return (
            <View style={Styles.viewStyle}>
                <ZKBanner 
                    style={Styles.bannerStyle}
                    netImageURLStringsGroup={bannerImgs}
                    onClickBanner={this.onClickBanner}
                    autoScrollTimeInterval={2}
                />
            </View>
        );
    }
}

const Styles = StyleSheet.create({
    viewStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        justifyContent: 'center',           
        alignItems: 'center'
    },
    bannerStyle: {
        width: Dimensions.get('window').width,
        height: pxToDp(200)
    }
})

export default BannerExample;