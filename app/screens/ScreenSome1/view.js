import React from 'react';
import { Text, View } from 'react-native';
import pxToDp from '@/config/pxToDp';

const view = props => {
    this.navigation = props.navigation;  
    return (
        <View style={{ display: 'flex', justifyContent: 'center' }}>
            <Text style={{marginTop: pxToDp(10), fontSize: pxToDp(36)}}>ScreenSome1</Text>
        </View>
    )
}

view.navigationOptions = {
    // 设置导航页头部标题
    title: "some1"
};

export default view;