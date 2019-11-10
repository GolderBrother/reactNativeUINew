/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  // View,
  // Text,
  StatusBar
} from 'react-native';
// This module was created when the NetInfo was split out from the core of React Native. To migrate to this module you need to follow the installation instructions above and then change you imports from:
// import { NetInfo } from "react-native"; to: import NetInfo from "@react-native-community/netinfo";
// yarn add @react-native-community/netinfo or npm install --save @react-native-community/netinfo
// react-native link @react-native-community/netinfo
import NetInfo from "@react-native-community/netinfo";
import {
  Header,
  // LearnMoreLinks,
  Colors,
  // DebugInstructions,
  // ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// 路由
import RouteMain from './app/config/route'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActionCreators from './app/redux/actions/user'

const App = () => {
  async function checkNetwork(){
    NetInfo.getConnectionInfo().then((connectionInfo) => {
      console.log('Initial, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
    });
    function handleFirstConnectivityChange(connectionInfo) {
      console.log('First change, type: ' + connectionInfo.type + ', effectiveType: ' + connectionInfo.effectiveType);
      NetInfo.removeEventListener(
        'connectionChange',
        handleFirstConnectivityChange
      );
    }
    NetInfo.addEventListener(
      'connectionChange',
      handleFirstConnectivityChange
    );
  }
  // 相当于 componentDidMount componentDidUpdate
  useEffect(() => {
    checkNetwork();
  }, [])

  return (
    <>
      <RouteMain />
      {/* <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
        </ScrollView>
      </SafeAreaView> */}
    </>
  );
};

/* const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
}); */

// redux reducers中的state映射到组件的props上
const mapStateToProps = (state) => ({
  userInfo: state.reducers.userInfo
})

// redux actions 映射到组件的props上
const mapDispatchToProps = (dispatch) => bindActionCreators(userActionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
