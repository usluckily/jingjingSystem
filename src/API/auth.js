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

export{
  login
}
