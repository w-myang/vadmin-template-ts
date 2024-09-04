// axios请求的一些通用配置

import axios from "axios"

class HttpRequest {
  constructor(baseUrl){
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig(){
    const config = {
      baseURL: this.baseUrl,
      headers: {

      }
    }
    return config
  }
  destroy(url){
    delete this.queue[url]
  }
  // 拦截器--请求或响应之前进行一些配置操作，所有接口请求配置的封装，请求数据格式的处理
  interceptors(instance, url){
    // 请求拦截
    instance.interceptors.request.use(config => {
      this.queue[url] = true
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截
    instance.interceptors.response.use(res => {
      this.destroy(url)
      const { data, status } = res
      let curLocation = window.location.origin
      if(data.code == 401){
        console.log("跳转至登录页")
      }
      return { data, status }
    },error => {
      this.destroy(url)
      return Promise.reject(error)
    })
  }

  request(options){
    // 接口通用请求参数配置
    if(options.method == 'get'){
      if(!options.params){
        options.params = {}
      }
      options.params.token = localStorage.getItem('token')
    }else if(options.method == 'post' && !options.url.includes("image")){
      options.data.token = localStorage.getItem('token')
    }else if(options.method == 'download'){
      options.responseType = 'blob'
      options.method = 'post',
      options.onDownloadProgress = function(evt){
        callback(evt);
      }
    }
    
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(),options)
    this.interceptors(instance, options.url)
    return instance(options)
  } 
}

export default HttpRequest