import React from 'react'
import { Image } from 'react-native'
import View from './view'
import style from './style'
class ScreenTab4 extends React.Component {
    state = {
        title: "ScreenTab4-examples"
    }
    static navigationOptions = {
        title: "examples",
        headerTitle: "examples",
        headerStyle: {
            backgroundColor: '#f60',
        },
        tabBarIcon: ({
            focused
        }) => {
            // 自定义 tab 图标
            const icon = focused ? 
            require('@/assets/images/tab_home_active.png') :
            require('@/assets/images/tab_home.png')
            return (
                <Image 
                    source={icon}
                    style={
                        style.icon
                    }
                />
            )
        }
    }
    render() {
        return View(this)
    }
}
export default ScreenTab4;