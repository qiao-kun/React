import { combineReducers } from 'redux'
import count from './count'//引入为Count组件服务的reducer
import persons from './person'//引入为person组件服务的reducer
//汇总所有的reducer变为一个总的reducer


export default combineReducers({ count, persons })//这边引入要和 引入组件名称相同


