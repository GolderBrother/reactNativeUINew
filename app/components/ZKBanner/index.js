import React, {
    Component
} from 'react'
import PropTypes from 'prop-types'
import { requireNativeComponent } from 'react-native'
const NewBanner = requireNativeComponent('NewBanner', NewBannerView);
class NewBannerView extends Component {
    static propTypes = {
        /**
         * 属性
         * 定义组件需要传到原生端的属性
         * 使用 prop-types 来进行校验
         */
        //自动滑动间隔时间
        autoScrollTimeInterval: PropTypes.number,
        //是否自动滑动
        autoScroll: PropTypes.bool,
        //点击事件
        onClickBanner: PropTypes.func,
        //网络图片数组
        netImageURLStringsGroup:PropTypes.array,
        //本地图片
        localizationImageNamesGroup:PropTypes.array,
    }
    render(){
        return (
            <NewBanner {...this.props} />
        )
    }
}


// export default NewBannerView
module.exports = NewBannerView