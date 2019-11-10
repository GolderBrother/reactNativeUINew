import React from 'react'
import View from './view'
import { Image } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActionCreators from '@/redux/actions/user'
class ScreenTab2 extends React.Component {
    // 静态对象属性，名称为 navigationOptions
    static navigationOptions = {
        title: 'ScreenTab2',
        headerTitle: 'ScreenTab2!',
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
        super(props);
        this.navigation = props.navigation
        this.state = {
            title: "ScreenTab2"
        }
    }
    changeUserInfo(userInfo){
        this.props.setUserInfo(userInfo)
    }
    clearUserInfo(){
        this.props.clearUserInfo()
    }
    render(){
        console.log("userInfo :o", this.props.userInfo)
        return View(this)
    }
}
// 使用的话就这样取值 state.reducers.reducers.xxx
const mapStateToProps = (state) => {
    console.log(state)
    return ({userInfo: state.reducers.reducers.userInfo})
}
     
const mapDispatchToProps = (dispatch) => (bindActionCreators(userActionCreators, dispatch))
export default connect(mapStateToProps, mapDispatchToProps)(ScreenTab2);