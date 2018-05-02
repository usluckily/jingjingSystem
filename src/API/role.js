/**
 * Created by Administrator on 2018/5/2.
 */
import instance from './index';
const preUrlPath = '/auth';

const getRole = {
  r:params => {
    return instance({
      url:`${preUrlPath}/role/school/get/`+params.sid+'?type='+params.type,
      method:'get'
    })
  }
}

const getRoleList = {
  r:params => {
    return instance({
      url:`${preUrlPath}/role/list`,
    })
  }
}


//right
const getFuncModule = {
  r:params => {
    return instance({
      url:`${preUrlPath}/right/web/list`
    })
  }
}

export{
  getRole,
  getRoleList,
  getFuncModule
}
