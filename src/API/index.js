/**
 * Created by Administrator on 2018/4/24.
 */
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://119.23.41.124:8070',//http://192.168.0.249:8070
  timeout: 30000
});

instance.defaults.headers.post['Content-Type'] = 'application/json';
//错误处理
  instance.interceptors.response.use(function(response) {
  return response;
}, function(error){
  console.log('error:',error)
});

export default instance;
