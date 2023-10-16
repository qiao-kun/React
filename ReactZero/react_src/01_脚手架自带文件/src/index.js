import React from 'react';//引入了react库
import ReactDOM from 'react-dom/client';//引入ReactDom
import './index.css';//引入全局样式文件
import App from './App';//引入App组件
import reportWebVitals from './reportWebVitals';//引入网页性能检测库
//因为webpack默认去public文件夹的index.html文件寻找root节点所以文件名称不可以随便改
const root = ReactDOM.createRoot(document.getElementById('root'));//获取root节点
root.render(//获取节点后将 App组件渲染到页面上
  // React.StrictMode用于检测App内一些api或语法的使用是否合理 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();//用于检测网页质量指标  页面性能 使用了web-vitals库
