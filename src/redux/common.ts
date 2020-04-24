import { Common, Action } from '@/interface/common';

const initState: Common={
  height: window.innerHeight,
  width: window.innerWidth,
  token: localStorage.token||'',

}

export default (state: Common=initState, action: Action) => {
  switch(action.type){
    case 'common_change_height':
      return Object.assign({},state,{height:action.height||window.innerHeight});
    case 'common_change_width':
      return Object.assign({},state,{width:action.width||window.innerWidth});
    case 'common_change_token':
      return Object.assign({},state,{token: action.token||localStorage.token});
    default:
      return state;
  }
}