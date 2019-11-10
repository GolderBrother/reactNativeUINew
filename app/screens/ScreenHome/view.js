import React from 'react';
import { Button, View, Text } from 'react-native';
import pxToDp from '@/config/pxToDp';
export default self => (
    <View style={{ justifyContent: "center", textAlign: "center" }}>
        <Text style={{ fontSize: pxToDp(36), textAlign: "center" }}>Home</Text>
        {/* ScreenSome1 从屏幕右侧进入(card 的形式) */}
        <Button title="goSome1" onPress={() => self.navigation.navigate("ScreenSome1")}/>
        {/* ScreenSome2 从屏幕下面进入(modal 的形式) */}
        <Button
            title="goSome2Modal"
            onPress={() => self.navigation.navigate("ScreenSome2Modal")}
        />
        {/* 跳转 H5 页面 */}
        <Button
            // title="webView-baidu"
            title="webView-attH5"
            onPress={() => {
                self.navigation.navigate("ScreenWebView", {
                     // url: 'https://github.com/facebook/react-native',
                    // url: "https://m.baidu.com/",
                    url: "http://110.80.38.74:8867/token/att/toH5Index#/login",
                    title: "加载中..."
                })
            }}
        />
    </View>
)