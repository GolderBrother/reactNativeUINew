import React from 'react'
import { Text, View } from 'react-native'
import BannerExample from '@/examples/BannerExample'
import ButtonExample from '@/examples/Button'

const view = self => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text>
                {self.state.title}
            </Text>
            <Text>BannerExample</Text>
            <BannerExample />
            <Text>ButtonExample</Text>
            <ButtonExample />
        </View>
    )
}
export default view