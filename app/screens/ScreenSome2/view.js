import React from 'react'
import { View, Text } from 'react-native';
import pxToDp from '@/config/pxToDp';
const view = self => (
    <View style={{ display: 'flex', justifyContent: 'center' }}>
        <Text style={{ marginTop: pxToDp(10), fontSize: pxToDp(36)}}>Some2，以 modal 的形式进入</Text>
    </View>
)
export default view