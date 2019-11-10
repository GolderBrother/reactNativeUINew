import React from 'react'
import { Button, Text, View } from 'react-native'
import Style from './style'
const view = self => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                {self.state.title}
            </Text>
            <Text style={{ fontSize: 24 }}>测试使用Redux</Text>
            <Text>我的姓名是：{self.props.userInfo.name}</Text>
            <Text>我的性别是：{self.props.userInfo.gender}</Text>
            <Button 
                style={Style.btn}
                title="改变姓名"
                onPress={() => self.changeUserInfo({name: "Sonia"})}
            />
            <Button 
                style={Style.btn}
                title="改变性别"
                onPress={() => self.changeUserInfo({gender: "F"})}
            />
            <Button 
                style={Style.btn}
                title="还原"
                onPress={() => self.changeUserInfo({
                    name: "james", gender: "男"
                })}
            />
            <Button 
                style={Style.btn}
                title="清空"
                onPress={() => self.clearUserInfo()}
            />
        </View>
    )
}
export default view