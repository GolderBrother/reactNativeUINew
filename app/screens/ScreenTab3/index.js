import React from 'react'
import { Image } from 'react-native'
import View from './view'
class ScreenTab3 extends React.Component {
    state = {
        title: "ScreenTab3"
    }
    // 静态对象属性，名称为 navigationOptions
    static navigationOptions = {
        title: 'n倍图',
        headerTitle: 'n倍图!',
        headerStyle: {
            backgroundColor: 'red',
        },
        tabBarIcon: ({
            focused
        }) => {
            // 自定义 tab 图标
            const icon = focused ?
                require('@/assets/images/tab_home_active.png') :
                require('@/assets/images/tab_home.png')
            return <Image
            source = {
                icon
            }
            style = {
                {
                    height: 22,
                    width: 22
                }
            }
            />
        }
    }
    constructor(props){
        super(props)
        this.navigation = props.navigation;
    }
    render(){
        return View(this)
    }
}
export default ScreenTab3;