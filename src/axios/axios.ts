import axios from 'axios';
import transformRequest from '@/utils/formData';
import { Res, Err} from '@/interface/axios';
import { Common } from '@/interface/common';
import '@/utils/config';

const http: any = axios.create({
  method: 'post',
  baseURL: (window as any).config.baseUrl,
  transformRequest,
});


http.interceptors.request.use(
  (config: Common) => {
    config.method = config.url.includes('type=get') ? 'get' : 'post';
    config.url.includes('json=1') && (config.transformRequest=(data: Common)=>JSON.stringify(data),config.headers={"Content-Type": 'application/json'});
    !config.url.includes('timeout=no') && (config.timeout=10000); 
    const token = localStorage.token;
    !!token && (config.headers.token = token);
    return config;
  },
  (error: Common) => {
    return Promise.reject(error);
  },
)

http.interceptors.response.use(
  (res: Res) => {
    
    if ( !res.config.url.includes(res.config.baseURL) || res.config.url.includes('blob') ) {
      return Promise.resolve(res.data);
    }
    
    
    // if (res.data.errorCode === '000004' || res.data.errorCode === '000002' ) {
    //   !!!localStorage.isNotice && !location.href.includes('/login') && (window as any).antd.message.error(res.data.errorMsg);
    //   (document.querySelector('#out-btn') as any).click();
    //   localStorage.isNotice=1;
    //   return Promise.reject(res.data);
    // }
    if ( res.status === 200 && Number(res.data.result) === 1) {
      return Promise.resolve(res.data.data);
    } else {
      !res.config.url.includes('no=1') && (window as any).antd.message.error(res.data.errorMsg||res.data.message||'请求出错');
      return Promise.reject(res.data)
    }
  },
  (err: Err) => {
    
    return Promise.reject({
      errorCode: 10000,
      errorMsg: err,
      result: -1,
    })
  },
)

export const CancelToken = axios.CancelToken;

export default http ;
