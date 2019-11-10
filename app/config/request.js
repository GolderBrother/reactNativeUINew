/*
 * @Author: yaohuang.zhang@zkteco.com 
 * @Date: 2019-09-27 14:12:06 
 * @Last Modified by: james.zhang
 * @Last Modified time: 2019-09-27 14:12:28
 * @Description: 配置 fetch api   
 */

// 请求服务器host
const host = 'http://api.juheapi.com';

/**
 * 发送网络请求
 * @param {String} method 请求方法
 * @param {String} url 请求地址
 * @param {String} bodyData post方法提交的请求数据
 * @param {String} urlParams get方法提交的查询字符串
 */
export default async function (method, url = '', {
    bodyData = {},
    urlParams = {}
}) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    url = url.includes(host) ? url : `${host}${url}`;
    // 将查询字符串写入到url中
    let queryStr = "";
    const urlParamsArr = Object.keys(urlParams);
    if (urlParamsArr && urlParamsArr.length) {
        for (let key in urlParams) {
            queryStr += `${key}=${urlParams[key]}&`
        };
        queryStr = `?${queryStr}`.slice(0, -1);
    }
    // 如果是 get 或者 head 方法，不添加请求头部
    const body = (method === 'GET' || method === 'HEAD') ? null : JSON.stringify(bodyData);
    const res = await fetch(new Request(`${url}${queryStr}`, {
        method,
        headers,
        body
    }));
    if (res.status < 200 || res.status > 209) {
        console.log(`请求错误：%d`, res.status)
    } else {
        return res.json();
    }
}