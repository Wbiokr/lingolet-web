import React from 'react';
import ReactDOM from 'react-dom';
import './style/APP.styl';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from '@/redux/index';
import * as redux from 'react-redux';

const {Provider} = redux as any;

const render=()=>{

  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
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
