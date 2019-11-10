import React from 'react';
import { View, Text } from 'react-native';
import ZKButton from "@/components/ZKButton"

export default class ButtonExamples extends React.Component {
    render(){
        return (
            <View>
                <Text>ButtonExamples</Text>
                <ZKButton type="primary" size="small" inline>small</ZKButton>
            </View>
        )
    }
}

