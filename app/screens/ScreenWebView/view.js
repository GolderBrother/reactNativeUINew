import React from 'react';
import { WebView } from 'react-native-webview'
// import XgToast from '@/components/XgToast';
const view  = self => (
    <WebView
        source={{ uri: self.navigation.state.params.url  }}
        // show the loading view on the first load
        startInLoadingState
        // 加载完成后设置标题
        onLoadEnd={() => self.navigation.setParams({ title: "标题" })}
        onError={() => self.xgToast.show('请输入有效数据', 2000, 'error')}
    >
        {/* 自定义 toast 组件 */}
        {/* <XgToast
            ref={element => {
                self.xgToast = element;
            }}
        /> */}
    </WebView>
);

export default view;