/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react'
import configureStore from './app/redux/store'
const { store, persistor } = configureStore()
const ReduxApp = () => (
    // 配置 Provider 为根组件，同时传入 store 作为其属性
    <Provider store={store}>
        {/* redux 持久化存储组件 */}
        <PersistGate persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
)
AppRegistry.registerComponent(appName, () => ReduxApp);
// AppRegistry.registerComponent(appName, () => App);
