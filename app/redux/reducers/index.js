// 通过combineReducers方法将三个子 Reducer 合并成一个大的函数   
import {
    combineReducers
} from 'redux';
// 引入所有的子reducer，子组件与子 Reducer 完全可以对应
import * as users from './users';
export default combineReducers({
    ...users,
});