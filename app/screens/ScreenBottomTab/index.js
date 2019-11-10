import React from 'react'
// 底部Tab菜单栏
import {
    createAppContainer,
    // createBottomTabNavigator
} from 'react-navigation';
// 0.61.createBottomTabNavigator-navigation-tabs这个包
import { createBottomTabNavigator } from 'react-navigation-tabs'
import ScreenHome from '@/screens/ScreenHome';
import ScreenTab1 from '@/screens/ScreenTab1';
import ScreenTab2 from '@/screens/ScreenTab2';
import ScreenTab3 from '@/screens/ScreenTab3';
import ScreenTab4 from '@/screens/ScreenTab4';

const RootStack = createBottomTabNavigator({
    ScreenHome: {
        screen: ScreenHome
    },
    ScreenTab1: {
        screen: ScreenTab1
    },
    ScreenTab2: {
        screen: ScreenTab2
    },
    ScreenTab3: {
        screen: ScreenTab3
    },
    ScreenTab4: {
        screen: ScreenTab4
    },
},
// 其他配置选项
{
    animationEnabled: true,
    swipeEnabled: false,
    swipeEnabled: true, //是否可以滑动切换
    animationEnabled: true, //切换是否有动画
    initialRouteName: 'ScreenHome', //进入App的首页面
    tabBarPosition: 'bottom',
    navigationOptions: ({
        navigation
    }) => ({
        title: navigation.state.routeName,
        headerStyle: {
            backgroundColor: '#fff',
        },
        headerTintColor: color.activeBarText,
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }),
})
RootStack.navigationOptions = ({navigation}) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    let headerTitle = routeName;
    alert(headerTitle);
    // You can do whatever you like here to pick the title based on the route name
    // let headerTitle = "";
    // if (routeName == "ScreenHome") {
    //     headerTitle = "主页"
    // } else if (routeName == "Details") {
    //     headerTitle = "详情"
    // } else if (routeName == "Diet") {
    //     headerTitle = "菜品"
    // } else if (routeName == "My") {
    //     headerTitle = "我"
    // }
    return {
        headerTitle,
    };
};

// React Navigation 3.0 has a number of breaking changes including an explicit app container required for the root navigator.
// https://stackoverflow.com/questions/53367195/invariant-violation-the-navigation-prop-is-missing-for-this-navigator
const ScreenTab = createAppContainer(RootStack);

export default ScreenTab;