const env = location.host === 'www.emic.com' ? 'pro' :  location.host.includes('localhost') ? 'local' : 'dev' ;
const isPro = env === 'pro';

(window as any).config = {
  baseUrl: isPro ? '127.0.0.1.com' : 'localhost',
  apiUrl:  isPro ? '127.0.0.1.com' : 'localhost' ,  
}