import React from 'react'
import { Image, Text, View } from 'react-native'
import { Style } from './style'
import pxToDp from "@/config/pxToDp";
const view = self => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                {self.state.title}
            </Text>
            <Text style={ Style.text }>测试自动加载不同分辨率的图片</Text>
            <Image 
                source={require("@/assets/images/test.png")}
                style={Style.img}
            />
            <Text style={ Style.text }>测试https网络图片</Text>
            <Image 
                source={{
                    uri: "https://reactjs.org/logo-og.png"
                }}
                style={Style.bigImg}
            />
        </View>
    )
}
export default view