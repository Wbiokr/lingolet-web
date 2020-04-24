import FileAll from '@/views/fileInfo/index';
import FileAudio from '@/views/fileInfo/audio';
import FileTransfer from '@/views/fileInfo/transfer';
import FileTranslate from '@/views/fileInfo/translate';

export default [
  {
    path: '/fileInfo/index',
    component: FileAll,
  },
  {
    path: '/fileInfo/audio',
    component: FileAudio,
  },
  {
    path: '/fileInfo/transfer',
    component: FileTransfer,
  },
  {
    path: '/fileInfo/translate',
    component: FileTranslate,
  }
]