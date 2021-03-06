import extend from 'extend';
import reqwest from 'reqwest';

import API from './api';

var Utils =  {
  ajax: function(params, success = () => {}, error = () => {}) {
    if(!params.api || !API[params.api]){
      console.err(params.api ? `${params.api}：该接口不存在` : '接口名不能为空');
      return
    }

    if(this.isLocal()){
      params.api = API[params.api]['local'];
      this.fetchMock(params, success, error);
    }else{
      params.api = API[params.api]['url'];
      this.fetchData(params, success, error);
    }
  },
  fetchMock: (params, success, error) => {
    reqwest({
      url: params.api,
      type: params.type || 'json',
      method: params.method || 'get',
      data: params.body || {},
      success: (res) => {
        if(res.success === true){
          success && success(res.data);
        }else{
          params.err && params.err(res.message || '接口调用出错');
        }
      },
      error: () => {
        error && error('接口调用异常');
      }
    });
  },
  fetchData: (params, success, error) => {
    reqwest({
      url: params.api,
      type: params.type || 'json',
      method: params.method || 'get',
      data: params.body || {},
      success: (res) => {
        if(res.success === true){
          success && success(res.data);
        }else{
          params.err && params.err(res.message || '接口调用出错');
        }
      },
      error: () => {
        error && error('接口调用异常');
      }
    })
  },
  extend: (...args) => {
    return extend.apply(null, args);
  },
  isLocal: () => {
    const hostname = location.hostname;
    return /127\.0\.0\.1/.test(hostname) || /localhost/.test(hostname) || /^(\d+\.){1,}\d+$/.test(hostname);
  },
  getUrlParam: (name) => {
    const params = QueryString.parse(localion.search);
    return typeof name === 'undefined' ? undefined : params[name];
  },
  nameSpace: function(name) {
    return function(v) {
      return name + '-' + v;
    };
  },
  open: function(url, bol) {
    if(bol){
      window.open(url);
    }else{
      window.location.href = url;
    }
  },
  isEmptyObject: function(obj) {
    for (var key in obj) {
      return false;
    }
    return true;
  }
}

export const ajax = Utils.ajax.bind(Utils);
export const nameSpace = Utils.nameSpace.bind(Utils);
export default Utils;
