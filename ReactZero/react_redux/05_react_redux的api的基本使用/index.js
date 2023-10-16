import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

//检测redux中的状态改变. 如果redux中的状态发生拉改变,那么重新渲染app组件
store.subscribe(() => {//因为有diff算法的加持 不用担心重新渲染带来的dom节点的消耗 效率
  root.render(
    <App />
  );
})
