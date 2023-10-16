import CountUI from '../../components/Count'
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'
import { connect } from 'react-redux'




export default connect(
    (state) => ({ count: state }),
    //mapDispatchToProps的一般写法
    //(
    //     dispatch) => (
    //     {
    //         jia: (number) => dispatch(createIncrementAction(number)),
    //         jian: (number) => dispatch(createDecrementAction(number)),
    //         jiaAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time))
    //     }
    // )

    // mapDispatchToProps的精简写法 这是对象形式
    {
        jia: createIncrementAction,//key值函数名字:value值是一个action对象
        jian: createDecrementAction,
        jiaAsync: createIncrementAsyncAction
    }

)(CountUI)
