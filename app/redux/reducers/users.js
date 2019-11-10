import { handleActions } from 'redux-actions'
import * as types from '../actionsType/users';
const initialState = {
    userInfo: {
        name: 'james',
        gender: 'M'
    }
}
const reducersMap = {};

// 设置用户信息
reducersMap[types.SET_USER_INFO] = (state, action) => {
    // reducer必须返回一个新的状态。所以基于原状态拷贝出一个新的状态对象
    const newState = {...state};
    newState.userInfo = {
        ...state.userInfo,
        ...action.payload
    };
    return newState;
}

// 清空用户信息
reducersMap[types.CLEAR_USER_STORE] = (state, action) => {
    // reducer必须返回一个新的状态。所以基于原状态拷贝出一个新的状态对象
    const newState = {...state};
    newState.userInfo = {};
    return newState;
}

export const reducers = handleActions(reducersMap, initialState)
