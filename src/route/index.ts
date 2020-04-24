import fileInfo from './fileInfo';
import manualCheck from './manualCheck';
import myOrder from './myOrder';
import packagePurchase from './packagePurchase';
import workSpace from './workSpace';

import Home from '@/views/home';
import Login from '@/views/login';
import Register from '@/views/register';
import Password from '@/views/password';

export default [
  ...fileInfo,
  ...manualCheck,
  ...myOrder,
  ...packagePurchase,
  ...workSpace,
  {
    path: '/home',
    component: Home
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/password',
    component: Password
  },
]