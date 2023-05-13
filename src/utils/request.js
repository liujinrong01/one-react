

import { extend } from 'umi-request';

const request = extend({
    prefix: 'http://v3.wufazhuce.com:8000', // 设置请求的 baseUrl
    timeout: 10000, // 设置超时时间，单位毫秒
    errorHandler: (error) => { // 设置全局错误处理
        console.error(error);
        // 这里可以自定义错误提示信息，或者做其他处理
        throw error;
    },
});

// 添加请求拦截器
request.interceptors.request.use((url, options) => {
    // 这里可以做一些请求前的处理，比如添加 token 等
    return { url, options };
});

// 添加响应拦截器
request.interceptors.response.use((response) => {
    // 这里可以做一些请求后的处理，比如检查登录状态，判断响应是否正常等
    return response;
});

export default request;
