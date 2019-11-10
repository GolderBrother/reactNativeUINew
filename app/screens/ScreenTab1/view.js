import React from 'react'
import { Button, View, Text, TextInput } from 'react-native'
import ZKToast from "@/components/ZKToast"
import Style from './style'
const view = (self, historyInfo) => (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text>{self.state.title}</Text>
        <TextInput
            style={Style.input}
            placeholder="input month"
            onChangeText={text => self.setFieldValue('inputMonthText', text)}
        />
        <TextInput
            style={Style.input}
            placeholder="input day"
            onChangeText={text => self.setFieldValue('inputDayText', text)}
        />
        <Button
            title="查询"
            onPress={self.getTodayOnHistoryInfo.bind(this)}
        />
        {/* 展示查询数据 */}
        <Text style={Style.text}>
            发生了啥事：
            {self.state.todayOnHistoryInfo}
        </Text>
        <ZKToast 
            ref={element => self.zkToast = element}
        />
    </View>
)
export default view