import Request from '@/config/request';

/**
 * 聚合数据 API，GET，查询历史上的今天
 * urlPar Object 具体的参数列表如下
 * @param {String} key   应用APPKEY
 * @param {String} v     当前固定值 1.0
 * @param {Number} month 月份，如 10
 * @param {Number} day   月份，如 1
 */
const todayOnHistory = urlPar => Request('GET', '/japi/toh', {
    urlParams: urlPar
});

export default {
    todayOnHistory
}