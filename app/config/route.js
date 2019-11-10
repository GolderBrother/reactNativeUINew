/*
 * @Author: james.zhang
 * @Date: 2019-05-13 11:13:19
 * @Last Modified by: james.zhang
 * @Last Modified time: 2019-09-27 11:44:55
 * @Description: 路由配置
 */

// 引入依赖
import React from "react";
import {
  createAppContainer,
  // createStackNavigator
} from "react-navigation";
// 0.61.1的createStackNavigator来源于react-navigation-stack这个包
// yarn add react-navigation-stack
import { createStackNavigator } from 'react-navigation-stack';

// 引入页面组件
// import PageA from "@screens/Test/PageA";
// import PageB from "@screens/Test/PageB";
// import HelloWorld from "@screens/Test/HelloWorld";

import ScreenHome from "@screens/ScreenHome";
import ScreenTab1 from "@screens/ScreenTab1";
import ScreenTab2 from "@screens/ScreenTab2";
import ScreenTab3 from "@screens/ScreenTab3";
import ScreenTab4 from "@screens/ScreenTab4";
import ScreenBottomTab from "@screens/ScreenBottomTab";
import ScreenSome1 from "@screens/ScreenSome1";
import ScreenSome2 from "@screens/ScreenSome2";
import ScreenWebView from "@screens/ScreenWebView";

// component demo
// import ZKButtonDemo from "@demos/ZKButton";
// import ZKCheckboxDemo from "@demos/ZKCheckbox";
// import ZKCalendarDemo from "@demos/ZKCalendar";


/**
 * 自定义 createStackNavigator screen 进入方式
 * 默认状态为 card，只需要输入对应页面，比如 ..navigate('ScreenSome1')
 * 如果要使某个页面进入方式为 modal 只需要在路径上加上 Modal
 * 比如：..navigate('ScreenSome2Modal')
 */
// createAppContainer
// React Navigation 3.0 has a number of breaking changes including an explicit app container required for the root navigator.
// https://stackoverflow.com/questions/53367195/invariant-violation-the-navigation-prop-is-missing-for-this-navigator

const StackModalNavigator = (routeConfigs, navigationConfig) => {
  const CardStackNavigator = createAppContainer(createStackNavigator(routeConfigs, navigationConfig));
  const modalRouteConfig = {};
  const routeNames = Object.keys(routeConfigs);

  routeNames.forEach((value, index) => {
    modalRouteConfig[`${value}Modal`] = routeConfigs[value];
  })

  const ModalStackNavigator = createAppContainer(createStackNavigator({
    CardStackNavigator: {
      screen: CardStackNavigator
    },
    ...modalRouteConfig,
  }, {
    // 如果页面进入方式为 modal，需要自定义 header（默认 header 样式失效，都叠在一块了）
    mode: 'modal',
    headerMode: 'none',
  }, ));

  return ModalStackNavigator;
}


// 配置路由
const AppNavigator = StackModalNavigator({
  ScreenBottomTab: {
    screen: ScreenBottomTab
  },
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
  ScreenSome1: {
    screen: ScreenSome1
  },
  ScreenSome2: {
    screen: ScreenSome2
  },
  // ZKButtonDemo: {
  //   screen: ZKButtonDemo
  // },
  // ZKCheckboxDemo: {
  //   screen: ZKCheckboxDemo
  // },
  // ZKCalendarDemo:{
  //   screen: ZKCalendarDemo
  // },
  ScreenWebView: {
    screen: ScreenWebView
  },
  // HelloWorld: {
  //   screen: HelloWorld
  // },
  // PageA: {
  //   screen: PageA
  // },
  // PageB: {
  //   screen: PageB
  // }
});

export default () => < AppNavigator /> ;