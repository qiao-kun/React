// 该文件专门暴漏一个store对象整个应用只有一个store对象
//引入createStore, 专门用于创建redux中最为核心的store对象
//引入applyMiddleware, 专门用于创建redux中最为核心的store对象
import { legacy_createStore, applyMiddleware, combineReducers } from 'redux'
//引入为Count组件服务的reducer
import countReducer from './reducers/count'
import personReducer from './reducers/person'
import thunk from 'redux-thunk'//引入允许异步函数被store接收并且处理的中间件
//汇总所有的reducer变为一个总的reducer
const allReducer = combineReducers({ he: countReducer, rens: personReducer })
//暴露store
export default legacy_createStore(allReducer, applyMiddleware(thunk))