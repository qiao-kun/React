//Count的UI组件
import CountUI from '../../components/Count'
import {//引入action
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'
//引入redux 中的store
// import store from '../../redux/store'
//引入connect用于链接UI组件与redux
import { connect } from 'react-redux'

/*
1.mapStateToProps函数返回的是一个对象中
2.返回的对象中key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
3.mapStateToProps用于传递状态
*/

function mapStateToProps(state) {//此处的state是传入connect内部给予的state的store
    // 在此处函数体必须返回一个对象如果不反回都想就会 _报错:!!!mapStateToProps 不是一个普通对象
    return { count: state }
}

/*
1.mapDispatchToProps函数返回一个对象
2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value--操作状态的方法
3.mapStateToProps用于传递操作状态的方法
*/

function mapDispatchToProps(dispatch) {//此处的dispatch是传入connect内部给予的store的dispatch方法
    return { // 在此处函数体必须返回一个对象如果不反回都想就会 _报错:!!!mapDispatchToProps 不是一个普通对象
        jia: (number) => {
            //通知redux执行加法
            dispatch(createIncrementAction(number))
            console.log(number);
        }
        , jian: (number) => {
            dispatch(createDecrementAction(number))
        },
        jiaAsync: (number, time) => {
            dispatch(createIncrementAsyncAction(number, time))
        }
    }
}

/*在此处实现a和b的原理是multiply.bind(fun)可以给multiply传入一个fun函数
*/

//connect()(CountUI)创建并且暴露一个被connect容器组件包裹的Count组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
