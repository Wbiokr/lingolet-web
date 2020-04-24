import ManualCreate from '@/views/manualCheck/create';
import ManualFailure from '@/views/manualCheck/failure';
import ManualIndex from '@/views/manualCheck/index';
import ManualSuccess from '@/views/manualCheck/success';

export default [
  {
    path: '/manualCheck/index',
    component: ManualIndex,
  },
  {
    path: '/manualCheck/create',
    component: ManualCreate,
  },
  {
    path: '/manualCheck/failure',
    component: ManualFailure,
  },
  {
    path: '/manualCheck/success',
    component: ManualSuccess,
  },
  
]