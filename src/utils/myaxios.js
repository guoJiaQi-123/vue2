import axios from "axios";

const _axios = axios.create({
    baseURL: 'http://localhost:8080', // 统一的路径前缀，将自动加在 url 前面
    withCredentials: true  // 跨域时是否携带 Cookie 等凭证，默认为 false
})

// 自定义请求拦截器
_axios.interceptors.request.use(
    function (config) {
        // 通过请求拦截器添加请求头token
        config.headers = {
            Authorization: 'aaa.bbb.ccc'
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
)

// 自定义响应拦截器
_axios.interceptors.response.use(
    function (responce) {
        return responce;
    },
    // 通过响应拦截器处理异常响应
    function (error) {
        if (error.response.status === 404) {
            console.log("资源不存在")
            return Promise.resolve(404);
        }
    }
)

export default _axios;


