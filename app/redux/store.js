/** 
 * 持久化存储仓库 redux + redux-persist
 */
import { createStore } from 'redux'
// 持久化存储的容器
import { AsyncStorage } from 'react-native'
import { persistStore, persistCombineReducers } from 'redux-persist'

import reducers from './reducers'
const config = {
    key: 'root',
    storage:  AsyncStorage
}


// 连接reducer，将reducer都放到store对象，用来监听action是否被调用,有则 Store 自动调用 Reducer，改变state
// 将reducer转换为持久化更改状态
// 使用的话就这样取值 state.reducers.reducers.xxx
const persistReducer = persistCombineReducers(config, {
    reducers
})

const configureStore = () => {
    // 引入createStore，传入persistReducer创建store对象
    const store = createStore(persistReducer)
    // 引入persistStore，创建持久化store对象
    const persistor = persistStore(store)
    return {
        store,
        persistor
    }
}

export default configureStore

