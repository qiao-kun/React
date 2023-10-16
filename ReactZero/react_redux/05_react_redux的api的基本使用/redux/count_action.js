// 该文件专门为Count组件生成action对象
import { INCREMENT, DECREMENT } from './constant'
import store from './store'
//同步action，就是指action的值为object类型的一般对象
export const createIncrementAction = data => ({ type: INCREMENT, data })
export const createDecrementAction = data => ({ type: DECREMENT, data })
//异步action，就是指action的值为函数,异步action中必须调用同步action
export const createIncrementAsyncAction = (data, time) => {
    return () => {
        setTimeout(() => {
            //函数体
            store.dispatch(createIncrementAction(data))
        }, time)
    }
}