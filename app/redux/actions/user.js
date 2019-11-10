import { createAction } from 'redux-actions'
import * as types from '../actionsType/users';

export const getUserInfo = userInfo => dispatch => async () => {
    try {
        // 调用接口获取用户信息 const data = xxx
        const data = userInfo;
        dispatch(createAction(types.GET_USER_INFO)(userInfo));
        return data;
    } catch (error) {
        return Promise.reject(error);
    }
}

export const setUserInfo = userInfo => createAction(types.SET_USER_INFO)(userInfo)

export const clearUserInfo = createAction(types.CLEAR_USER_STORE)