import React from 'react'
import { Image } from 'react-native'
import view from './view'
import historyServices from "@/services/historyServices"
class ScreenTab1 extends React.Component {
    // 静态对象属性，名称为 navigationOptions
    static navigationOptions = {
        title: '网络请求',
        headerTitle: '网络请求!',
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
        this.state = {
            title: "ScreenTab1",
            todayOnHistoryInfo: "",
            inputMonthText: "",
            inputDayText: ""
        }
    }
    setFieldValue(field, value){
        this.setState({
            [field]: value
        })
    }
    // 获取历史上今天发生的事情
    getTodayOnHistoryInfo = async () => {
        try {
            if(!this.state.inputMonthText || !this.state.inputDayText) {
                this.zkToast.show({ text: "请输入有效数据", type: "error" });
                return;
            }
            const urlParams = {
                // 申请的聚合数据应用的key，每天只有100免费请求次数
                key: "7606e878163d494b376802115f30dd4e",
                v: "1.0",
                month: Number(this.state.inputMonthText),
                day: Number(this.state.inputDayText)
            }
            const res = await historyServices.todayOnHistory(urlParams);
            if(res.error_code === 0) {
                let todayOnHistoryInfo = res.result ? (res.result[0] && res.result[0].des) : "暂无数据"; 
                this.setState({
                    todayOnHistoryInfo
                });
            }else {
                this.zkToast.show({ text: res.text, type: "error" });
            }

        } catch (error) {
            this.zkToast.show({ text: error.message || 'error', type: "error" });
        }
    }
    render() {
        return view(this)
    }
}
export default ScreenTab1