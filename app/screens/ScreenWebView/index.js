import React from 'react';
// react-native 61.0不再支持，改用react-native-webview
// import { WebView } from 'react-native';
// import { WebView } from 'react-native-webview'
import view from './view';
class ScreenWebView extends React.Component {
    // 设置头部导航
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.title,
        headerBackTitle: null,
        headerBackTitleStyle: {
            color: "#f6f6f6"
        }
    })
    constructor(props){
        super(props);
        this.navigation = props.navigation;
    }
    render(){
        return view(this)
    }
}

export default ScreenWebView;

