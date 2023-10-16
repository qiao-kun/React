//引入createStore, 专门用于创建redux中最为核心的store对象
import { legacy_createStore } from 'redux'

// 该文件专门暴漏一个store对象整个应用只有一个store对象

//引入为Count组件服务的reducer
import countReducer from './count_reducer'
//暴露store
export default legacy_createStore(countReducer)