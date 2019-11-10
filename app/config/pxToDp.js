/**
 * 自适应布局, 用于尺寸自适应
 * @param uiElementPx: ui给的原始尺寸
 */
import { Dimensions, Platform } from 'react-native';

// app 只有竖屏模式，所以可以只获取一次 width
// 实际上，通过 Dimensions.get('window').width 获取的屏幕宽度和自己想象的可能有出入，比如，iphone7 屏幕 4.7''，获取到的宽度是 375，华为 P9 是 5.2'，但获取到的宽度却是是 360！有点坑，这个工具函数还有待优化。
const deviceWidthDp = Dimensions.get('window').width;

// UI 默认给图是 750
const uiWidthPx = 750;

function pxToDp(uiElementPx) {
  const transferNumb = uiElementPx * deviceWidthDp / uiWidthPx;

  if (transferNumb >= 1) {
    // 避免出现循环小数
    return Math.ceil(transferNumb);
  } else if (Platform.OS === 'android') {
    // 如果是安卓，最小为1，避免边框出现锯齿
    return 1;
  }
  return 0.5;
}

export default pxToDp;
