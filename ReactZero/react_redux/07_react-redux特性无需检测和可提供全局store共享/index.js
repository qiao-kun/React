import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';

//2.使用react-redux可以使用Provider共给所有组件的父组件共享store//精确共给容器组件内的UI组件
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

//1.使用react-redux之后就不需要检测了
// //检测redux中的状态改变. 如果redux中的状态发生拉改变,那么重新渲染app组件
// store.subscribe(() => {//因为有diff算法的加持 不用担心重新渲染带来的dom节点的消耗 效率
//   root.render(
//     <App />
//   );
// })
