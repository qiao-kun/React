import React, { useMemo, useCallback, useContext, useReducer, useState, useEffect } from "react";
import { connect } from "dva";
import { userInfoType } from "../model/model1";

// import { Button } from 'antd'

interface UserInfoType {
    qiaokun: userInfoType,
    dispatch: any
}

const Index: React.FC<UserInfoType> = (props) => {
    const [count, setCount] = useState(0)
    const watchCount = useMemo(() => {
        console.log('useMemo数量' + count)
        return count
    }, [count])

    useEffect(() => {//副作用容纳站
        console.log('useEffect数量' + count)
    })

    const incrementCount = useCallback(() => {
        setCount(prevCount => prevCount + 1);
        console.log('useCallback数值' + count)
        // // eslint-disable-next-line react-hooks/exhaustive-deps
        // count
    }, [count]);



    const { qiaokun, dispatch } = props
    // console.log(props, 'props')
    const changeValue = () => {
        // console.log('111')
        dispatch({
            type: "qiaokun/save",
            payload: {
                name: "可是最后呢"
            }
        })
    }
    return (<div >
        <p onClick={changeValue}>{qiaokun.name}</p>
        <p>监控的数字:{watchCount}</p>
        <p>数字本身:{count}   <button onClick={incrementCount}>+</button></p>

    </div>)
}

export default connect(({ qiaokun }: userInfoType) => ({ qiaokun }))(Index)