import React from 'react';
import ReactDOM from 'react-dom';
import './style/APP.styl';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from '@/redux/index';
import * as redux from 'react-redux';
import * as Router from 'react-router-dom';


const {Provider} = redux as any;
const { HashRouter } = Router as any;


const render=()=>{

  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>

      {/* <React> */}
        <App />
      {/* </React> */}
      </HashRouter>
    </Provider>,
    document.getElementById('root')
  );
}

render();

const unscribe = store.subscribe(()=>{
  render()
})

unscribe();

serviceWorker.unregister();
