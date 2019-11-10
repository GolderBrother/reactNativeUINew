import React, {
    Component
} from 'react';
import {
    Image
} from 'react-native';
import view from './view';
class ScreenHome extends Component {
    // 静态对象属性，名称为 navigationOptions
    static navigationOptions = {
        title: '首页',
        headerTitle: 'Home!',
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
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
    }
    render() {
        return view(this)
    }
}

export default ScreenHome;