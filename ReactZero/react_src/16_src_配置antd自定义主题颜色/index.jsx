import './index.css'
//引入react核心库
import React from "react";
//引入ReactDom
import ReactDOM from 'react-dom/client'
//引入App组件
import App from './App'

//渲染App到页面
const root = ReactDOM.createRoot(document.getElementById('root'));//获取root节点
root.render(//获取节点后将 App组件渲染到页面上
    // React.StrictMode用于检测App内一些api或语法的使用是否合理 
    <App />
);
// ReactDOM.createRoot(<App />, document.getElementById('root'))