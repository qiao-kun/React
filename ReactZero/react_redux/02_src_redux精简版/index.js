import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);


store.subscribe(() => {//因为有diff算法的加持 不用担心重新渲染带来的dom节点的消耗 效率
  root.render(
    <App />
  );
})
