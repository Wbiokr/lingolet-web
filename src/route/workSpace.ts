import WorkAudioCreate from '@/views/workSpace/audio/create';
import WorkAudioIndex from '@/views/workSpace/audio/index';
import WorkAudioFailure from '@/views/workSpace/audio/failure';
import WorkAudioSuccess from '@/views/workSpace/audio/success';

import WorkRecordIndex from '@/views/workSpace/record/index';
import WorkRecordDoing from '@/views/workSpace/record/doing';

export default [
  {
    path: '/workeSpace/audio/create',
    component: WorkAudioCreate
  },
  {
    path: '/workeSpace/audio/index',
    component: WorkAudioIndex
  },
  {
    path: '/workeSpace/audio/failure',
    component: WorkAudioFailure
  },
  {
    path: '/workeSpace/audio/success',
    component: WorkAudioSuccess
  },
  {
    path: '/workeSpace/record/index',
    component: WorkRecordIndex
  },
  {
    path: '/workeSpace/record/doing',
    component: WorkRecordDoing
  },
  
]