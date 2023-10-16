// 该文件专门暴漏一个store对象整个应用只有一个store对象
//引入createStore, 专门用于创建redux中最为核心的store对象
//引入applyMiddleware, 专门用于创建redux中最为核心的store对象
import { legacy_createStore, applyMiddleware } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'//引入允许异步函数被store接收并且处理的中间件
import { composeWithDevTools } from 'redux-devtools-extension'//redux-devtools-extension引入开发者工具
//说明如果不使用thunk和一些其他库中间件的使用name 仅仅引入composeWithDevTools就可以了 如果使用了那么就要使用 legacy_createStore(allReducer, composeWithDevTools(applyMiddleware(thunk))) 这种形式包裹住



//暴露store
export default legacy_createStore(reducer, composeWithDevTools(applyMiddleware(thunk))) 