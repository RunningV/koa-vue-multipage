import axios from 'axios'
import props from '../../../props.json'
import {Toast} from './common'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.timeout = 5000;
axios.defaults.baseURL = props.apiBase;

//POST传参序列化
axios.interceptors.request.use((config) => {
  if(config.method  === 'post'){
  }
  return config;
},(error) =>{
  // _.toast("错误的传参");
  console.log(error)
  return Promise.reject(error);
});

//code状态码200判断
axios.interceptors.response.use((res) =>{
  if(res.status !== 200){
    // _.toast(res.data.msg);
    console.log(res)
    return Promise.reject(res);
  }
  return res;
}, (error) => {
  // _.toast("网络异常");
  console.log(error)
  return Promise.reject(error);
});

export function fetchCommonAPI (url, params) {
  return axios.post(url, params).then(res => {
    return res.data
  })
}
export function getCommonAPI (url, params) {
  return axios.get(url).then(res => {
    return res.data
  })
}
