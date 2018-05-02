/**
 * Created by Administrator on 2018/4/24.
 */
import instance from './index';
const preUrlPath = '/auth';

const login = {
  p: ['POST,/auth/web/login'],
  r: params => {
    console.log(params)
    // return instance.post(`${preUrlPath}/app/login`, {params})
    let url = `${preUrlPath}/web/login`+'?'+params

    return instance({
      url:url,
      method:'post'
    })
  }
}

const identity = {
  p:['get','/auth/identity/list'],
  r:params => {
    let url
    if(params){
      url = `${preUrlPath}/identity/list`+'?'+ (params || {})
    }else{
      url = `${preUrlPath}/identity/list`
    }

    return instance({
      url:url,
      method:'get'
    })
  }
}

const roleSwitch = {
  p:['POST','/auth/'],
  r:params => {
    let url = `${preUrlPath}/web/role/w`+'?'+params

    return instance({
      url:url,
      method:'post'
    })
  }
}

export{
  login,
  identity,
  roleSwitch
}
