import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

export default function Home() {
    const [sum, setSum] = useState(1)
    return (
        <div>
            <h3>我是home</h3>
            <h3>当前sum的值是:{sum}</h3>
            {sum === 2 ? <Navigate to={'/about'} replace={false} /> : <h3>当前sum的值不等于2</h3>}
            <button onClick={() => setSum(2)}>点击我sum将变为2</button>
        </div>
    )
}
