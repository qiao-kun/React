

import { ADD_PERSON } from "../constant"

const initState = [//初始化人的列表
    { id: "001", name: "崔赛豪", age: "18" }
]
const personReducer = (preState = initState, { type, personObj }) => {//这边在接收 personObj 的时候 如果不适用action 那么结构对象一定要 使用对象的 参数名称!!!!!
    //根据type决定如何加工数据
    switch (type) {
        case ADD_PERSON:
            return [personObj, ...preState]
        default:
            return preState
    }
}
//名字是不影响的
export default personReducer
